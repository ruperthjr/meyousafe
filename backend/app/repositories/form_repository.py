from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, update, delete, func
from typing import Optional, List
from uuid import UUID
from app.models import Form
from app.schemas import FormCreate, FormUpdate


class FormRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def create(self, form_data: FormCreate) -> Form:
        """Create a new form."""
        form_dict = form_data.model_dump()
        form_dict['questions'] = [q.model_dump() for q in form_data.questions]
        
        form = Form(**form_dict)
        self.db.add(form)
        await self.db.flush()
        await self.db.refresh(form)
        return form

    async def get_by_id(self, form_id: UUID) -> Optional[Form]:
        """Get form by ID."""
        result = await self.db.execute(
            select(Form).where(Form.id == form_id)
        )
        return result.scalar_one_or_none()

    async def get_active(self) -> Optional[Form]:
        """Get the active form."""
        result = await self.db.execute(
            select(Form)
            .where(Form.is_active == True)
            .order_by(Form.created_at.desc())
        )
        return result.scalar_one_or_none()

    async def get_all(
        self,
        skip: int = 0,
        limit: int = 100,
        is_active: Optional[bool] = None
    ) -> tuple[List[Form], int]:
        """Get all forms with pagination."""
        query = select(Form)
        
        if is_active is not None:
            query = query.where(Form.is_active == is_active)
        
        count_query = select(func.count()).select_from(query.subquery())
        total = await self.db.scalar(count_query)
        
        query = query.order_by(Form.created_at.desc()).offset(skip).limit(limit)
        result = await self.db.execute(query)
        forms = result.scalars().all()
        
        return list(forms), total or 0

    async def update(self, form_id: UUID, form_data: FormUpdate) -> Optional[Form]:
        """Update a form."""
        update_data = form_data.model_dump(exclude_unset=True)
        
        if 'questions' in update_data and update_data['questions']:
            update_data['questions'] = [q.model_dump() for q in form_data.questions]
        
        if not update_data:
            return await self.get_by_id(form_id)
        
        await self.db.execute(
            update(Form)
            .where(Form.id == form_id)
            .values(**update_data)
        )
        await self.db.flush()
        
        return await self.get_by_id(form_id)

    async def delete(self, form_id: UUID) -> bool:
        """Delete a form."""
        result = await self.db.execute(
            delete(Form).where(Form.id == form_id)
        )
        await self.db.flush()
        return result.rowcount > 0

    async def activate(self, form_id: UUID) -> Optional[Form]:
        """Activate a form and deactivate others."""
        await self.db.execute(
            update(Form).values(is_active=False)
        )
        
        await self.db.execute(
            update(Form)
            .where(Form.id == form_id)
            .values(is_active=True)
        )
        await self.db.flush()
        
        return await self.get_by_id(form_id)

    async def deactivate(self, form_id: UUID) -> Optional[Form]:
        """Deactivate a form."""
        await self.db.execute(
            update(Form)
            .where(Form.id == form_id)
            .values(is_active=False)
        )
        await self.db.flush()
        
        return await self.get_by_id(form_id)