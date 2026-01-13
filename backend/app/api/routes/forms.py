from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.ext.asyncio import AsyncSession
from typing import Optional
from uuid import UUID
from app.database import get_db
from app.services import FormService
from app.schemas import (
    FormCreate,
    FormUpdate,
    FormResponse,
    FormListItem,
    PaginatedResponse,
    SuccessResponse
)

router = APIRouter(prefix="/forms", tags=["forms"])


@router.post("", response_model=FormResponse, status_code=status.HTTP_201_CREATED)
async def create_form(
    form_data: FormCreate,
    db: AsyncSession = Depends(get_db)
):
    """Create a new form."""
    service = FormService(db)
    return await service.create_form(form_data)


@router.get("/active", response_model=FormResponse)
async def get_active_form(db: AsyncSession = Depends(get_db)):
    """Get the currently active form."""
    service = FormService(db)
    return await service.get_active_form()


@router.get("", response_model=PaginatedResponse[FormListItem])
async def get_all_forms(
    page: int = Query(1, ge=1),
    page_size: int = Query(20, ge=1, le=100),
    is_active: Optional[bool] = Query(None),
    db: AsyncSession = Depends(get_db)
):
    """Get all forms with pagination."""
    service = FormService(db)
    return await service.get_all_forms(page, page_size, is_active)


@router.get("/{form_id}", response_model=FormResponse)
async def get_form(
    form_id: UUID,
    db: AsyncSession = Depends(get_db)
):
    """Get a specific form by ID."""
    service = FormService(db)
    return await service.get_form(form_id)


@router.patch("/{form_id}", response_model=FormResponse)
async def update_form(
    form_id: UUID,
    form_data: FormUpdate,
    db: AsyncSession = Depends(get_db)
):
    """Update a form."""
    service = FormService(db)
    return await service.update_form(form_id, form_data)


@router.delete("/{form_id}", response_model=SuccessResponse)
async def delete_form(
    form_id: UUID,
    db: AsyncSession = Depends(get_db)
):
    """Delete a form."""
    service = FormService(db)
    await service.delete_form(form_id)
    return SuccessResponse(message="Form deleted successfully")


@router.post("/{form_id}/duplicate", response_model=FormResponse)
async def duplicate_form(
    form_id: UUID,
    db: AsyncSession = Depends(get_db)
):
    """Duplicate a form."""
    service = FormService(db)
    return await service.duplicate_form(form_id)


@router.post("/{form_id}/activate", response_model=FormResponse)
async def activate_form(
    form_id: UUID,
    db: AsyncSession = Depends(get_db)
):
    """Activate a form (deactivates all other forms)."""
    service = FormService(db)
    return await service.activate_form(form_id)


@router.post("/{form_id}/deactivate", response_model=FormResponse)
async def deactivate_form(
    form_id: UUID,
    db: AsyncSession = Depends(get_db)
):
    """Deactivate a form."""
    service = FormService(db)
    return await service.deactivate_form(form_id)