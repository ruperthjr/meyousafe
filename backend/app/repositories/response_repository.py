from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, update, delete, func, or_
from typing import Optional, List
from uuid import UUID
from datetime import datetime
from app.models import Response, ResponseStatus
from app.schemas import ResponseCreate, ResponseUpdate, ResponseFilter
from app.utils.reference_code import generate_reference_code


class ResponseRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def create(self, response_data: ResponseCreate) -> Response:
        """Create a new response."""
        reference_code = await self._generate_unique_reference_code()
        
        response_dict = response_data.model_dump()
        response_dict['reference_code'] = reference_code
        
        if response_dict.get('status') == ResponseStatus.SUBMITTED:
            response_dict['submitted_at'] = datetime.utcnow()
        
        response = Response(**response_dict)
        self.db.add(response)
        await self.db.flush()
        await self.db.refresh(response)
        return response

    async def get_by_id(self, response_id: UUID) -> Optional[Response]:
        """Get response by ID."""
        result = await self.db.execute(
            select(Response).where(Response.id == response_id)
        )
        return result.scalar_one_or_none()

    async def get_by_reference(self, reference_code: str) -> Optional[Response]:
        """Get response by reference code."""
        result = await self.db.execute(
            select(Response).where(Response.reference_code == reference_code)
        )
        return result.scalar_one_or_none()

    async def get_all(
        self,
        skip: int = 0,
        limit: int = 100,
        filters: Optional[ResponseFilter] = None
    ) -> tuple[List[Response], int]:
        """Get all responses with pagination and filters."""
        query = select(Response)
        
        if filters:
            if filters.status:
                query = query.where(Response.status == filters.status)
            if filters.priority:
                query = query.where(Response.priority == filters.priority)
            if filters.form_id:
                query = query.where(Response.form_id == filters.form_id)
            if filters.date_from:
                query = query.where(Response.created_at >= filters.date_from)
            if filters.date_to:
                query = query.where(Response.created_at <= filters.date_to)
            if filters.search:
                search_term = f"%{filters.search}%"
                query = query.where(
                    or_(
                        Response.reference_code.ilike(search_term),
                        Response.notes.ilike(search_term)
                    )
                )
        
        count_query = select(func.count()).select_from(query.subquery())
        total = await self.db.scalar(count_query)
        
        query = query.order_by(Response.created_at.desc()).offset(skip).limit(limit)
        result = await self.db.execute(query)
        responses = result.scalars().all()
        
        return list(responses), total or 0

    async def update(self, response_id: UUID, response_data: ResponseUpdate) -> Optional[Response]:
        """Update a response."""
        update_data = response_data.model_dump(exclude_unset=True)
        
        if not update_data:
            return await self.get_by_id(response_id)
        
        if 'status' in update_data and update_data['status'] == ResponseStatus.SUBMITTED:
            existing = await self.get_by_id(response_id)
            if existing and not existing.submitted_at:
                update_data['submitted_at'] = datetime.utcnow()
        
        if 'status' in update_data and update_data['status'] == ResponseStatus.REVIEWED:
            update_data['reviewed_at'] = datetime.utcnow()
        
        await self.db.execute(
            update(Response)
            .where(Response.id == response_id)
            .values(**update_data)
        )
        await self.db.flush()
        
        return await self.get_by_id(response_id)

    async def delete(self, response_id: UUID) -> bool:
        """Delete a response."""
        result = await self.db.execute(
            delete(Response).where(Response.id == response_id)
        )
        await self.db.flush()
        return result.rowcount > 0

    async def submit(self, response_id: UUID) -> Optional[Response]:
        """Submit a response."""
        await self.db.execute(
            update(Response)
            .where(Response.id == response_id)
            .values(
                status=ResponseStatus.SUBMITTED,
                submitted_at=datetime.utcnow()
            )
        )
        await self.db.flush()
        
        return await self.get_by_id(response_id)

    async def get_stats(self, form_id: Optional[UUID] = None) -> dict:
        """Get response statistics."""
        query = select(Response)
        if form_id:
            query = query.where(Response.form_id == form_id)
        
        result = await self.db.execute(query)
        responses = result.scalars().all()
        
        stats = {
            'total': len(responses),
            'by_status': {},
            'by_priority': {},
        }
        
        for response in responses:
            status = response.status.value if hasattr(response.status, 'value') else response.status
            stats['by_status'][status] = stats['by_status'].get(status, 0) + 1
            
            if response.priority:
                priority = response.priority.value if hasattr(response.priority, 'value') else response.priority
                stats['by_priority'][priority] = stats['by_priority'].get(priority, 0) + 1
        
        return stats

    async def _generate_unique_reference_code(self) -> str:
        """Generate a unique reference code."""
        max_attempts = 10
        for _ in range(max_attempts):
            code = generate_reference_code()
            existing = await self.get_by_reference(code)
            if not existing:
                return code
        
        raise ValueError("Failed to generate unique reference code")