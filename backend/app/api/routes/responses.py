from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.ext.asyncio import AsyncSession
from typing import Optional
from uuid import UUID
from app.database import get_db
from app.services import ResponseService
from app.schemas import (
    ResponseCreate,
    ResponseUpdate,
    ResponseResponse,
    ResponseListItem,
    ResponseFilter,
    PaginatedResponse,
    SuccessResponse
)
from app.models import ResponseStatus, ResponsePriority

router = APIRouter(prefix="/responses", tags=["responses"])


@router.post("", response_model=ResponseResponse, status_code=status.HTTP_201_CREATED)
async def create_response(
    response_data: ResponseCreate,
    db: AsyncSession = Depends(get_db)
):
    """Create a new response."""
    service = ResponseService(db)
    return await service.create_response(response_data)


@router.get("", response_model=PaginatedResponse[ResponseListItem])
async def get_all_responses(
    page: int = Query(1, ge=1),
    page_size: int = Query(20, ge=1, le=100),
    status_filter: Optional[ResponseStatus] = Query(None, alias="status"),
    priority: Optional[ResponsePriority] = Query(None),
    form_id: Optional[UUID] = Query(None),
    search: Optional[str] = Query(None),
    db: AsyncSession = Depends(get_db)
):
    """Get all responses with pagination and filters."""
    filters = ResponseFilter(
        status=status_filter,
        priority=priority,
        form_id=form_id,
        search=search
    )
    service = ResponseService(db)
    return await service.get_all_responses(page, page_size, filters)


@router.get("/reference/{reference_code}", response_model=ResponseResponse)
async def get_response_by_reference(
    reference_code: str,
    db: AsyncSession = Depends(get_db)
):
    """Get a response by reference code."""
    service = ResponseService(db)
    return await service.get_response_by_reference(reference_code)


@router.get("/stats")
async def get_response_stats(
    form_id: Optional[UUID] = Query(None),
    db: AsyncSession = Depends(get_db)
):
    """Get response statistics."""
    service = ResponseService(db)
    return await service.get_response_stats(form_id)


@router.get("/{response_id}", response_model=ResponseResponse)
async def get_response(
    response_id: UUID,
    db: AsyncSession = Depends(get_db)
):
    """Get a specific response by ID."""
    service = ResponseService(db)
    return await service.get_response(response_id)


@router.patch("/{response_id}", response_model=ResponseResponse)
async def update_response(
    response_id: UUID,
    response_data: ResponseUpdate,
    db: AsyncSession = Depends(get_db)
):
    """Update a response."""
    service = ResponseService(db)
    return await service.update_response(response_id, response_data)


@router.delete("/{response_id}", response_model=SuccessResponse)
async def delete_response(
    response_id: UUID,
    db: AsyncSession = Depends(get_db)
):
    """Delete a response."""
    service = ResponseService(db)
    await service.delete_response(response_id)
    return SuccessResponse(message="Response deleted successfully")


@router.post("/{response_id}/submit", response_model=ResponseResponse)
async def submit_response(
    response_id: UUID,
    db: AsyncSession = Depends(get_db)
):
    """Submit a response."""
    service = ResponseService(db)
    return await service.submit_response(response_id)