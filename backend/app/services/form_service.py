from sqlalchemy.ext.asyncio import AsyncSession
from typing import Optional, List
from uuid import UUID
from app.repositories import FormRepository
from app.schemas import FormCreate, FormUpdate, FormResponse, FormListItem, PaginatedResponse
from app.models import Form
from fastapi import HTTPException, status


class FormService:
    def __init__(self, db: AsyncSession):
        self.repository = FormRepository(db)

    async def create_form(self, form_data: FormCreate) -> FormResponse:
        """Create a new form."""
        form = await self.repository.create(form_data)
        return FormResponse.model_validate(form)

    async def get_form(self, form_id: UUID) -> FormResponse:
        """Get form by ID."""
        form = await self.repository.get_by_id(form_id)
        if not form:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Form not found"
            )
        return FormResponse.model_validate(form)

    async def get_active_form(self) -> FormResponse:
        """Get the active form."""
        form = await self.repository.get_active()
        if not form:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="No active form found"
            )
        return FormResponse.model_validate(form)

    async def get_all_forms(
        self,
        page: int = 1,
        page_size: int = 20,
        is_active: Optional[bool] = None
    ) -> PaginatedResponse[FormListItem]:
        """Get all forms with pagination."""
        skip = (page - 1) * page_size
        forms, total = await self.repository.get_all(skip, page_size, is_active)
        
        form_items = []
        for form in forms:
            item_data = {
                'id': form.id,
                'title': form.title,
                'description': form.description,
                'question_count': len(form.questions) if form.questions else 0,
                'response_count': 0,
                'is_active': form.is_active,
                'created_at': form.created_at,
            }
            form_items.append(FormListItem.model_validate(item_data))
        
        total_pages = (total + page_size - 1) // page_size
        
        return PaginatedResponse(
            data=form_items,
            total=total,
            page=page,
            page_size=page_size,
            total_pages=total_pages
        )

    async def update_form(self, form_id: UUID, form_data: FormUpdate) -> FormResponse:
        """Update a form."""
        existing_form = await self.repository.get_by_id(form_id)
        if not existing_form:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Form not found"
            )
        
        form = await self.repository.update(form_id, form_data)
        if not form:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to update form"
            )
        
        return FormResponse.model_validate(form)

    async def delete_form(self, form_id: UUID) -> bool:
        """Delete a form."""
        existing_form = await self.repository.get_by_id(form_id)
        if not existing_form:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Form not found"
            )
        
        return await self.repository.delete(form_id)

    async def duplicate_form(self, form_id: UUID) -> FormResponse:
        """Duplicate a form."""
        existing_form = await self.repository.get_by_id(form_id)
        if not existing_form:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Form not found"
            )
        
        form_data = FormCreate(
            title=f"{existing_form.title} (Copy)",
            description=existing_form.description,
            questions=[q for q in existing_form.questions],
            is_active=False
        )
        
        return await self.create_form(form_data)

    async def activate_form(self, form_id: UUID) -> FormResponse:
        """Activate a form."""
        existing_form = await self.repository.get_by_id(form_id)
        if not existing_form:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Form not found"
            )
        
        form = await self.repository.activate(form_id)
        if not form:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to activate form"
            )
        
        return FormResponse.model_validate(form)

    async def deactivate_form(self, form_id: UUID) -> FormResponse:
        """Deactivate a form."""
        existing_form = await self.repository.get_by_id(form_id)
        if not existing_form:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Form not found"
            )
        
        form = await self.repository.deactivate(form_id)
        if not form:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to deactivate form"
            )
        
        return FormResponse.model_validate(form)