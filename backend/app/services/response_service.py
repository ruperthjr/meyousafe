from sqlalchemy.ext.asyncio import AsyncSession
from typing import Optional
from uuid import UUID
from app.repositories import ResponseRepository
from app.schemas import (
    ResponseCreate,
    ResponseUpdate,
    ResponseResponse,
    ResponseListItem,
    ResponseFilter,
    PaginatedResponse
)
from fastapi import HTTPException, status


class ResponseService:
    def __init__(self, db: AsyncSession):
        self.repository = ResponseRepository(db)

    async def create_response(self, response_data: ResponseCreate) -> ResponseResponse:
        """Create a new response."""
        response = await self.repository.create(response_data)
        return ResponseResponse.model_validate(response)

    async def get_response(self, response_id: UUID) -> ResponseResponse:
        """Get response by ID."""
        response = await self.repository.get_by_id(response_id)
        if not response:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Response not found"
            )
        return ResponseResponse.model_validate(response)

    async def get_response_by_reference(self, reference_code: str) -> ResponseResponse:
        """Get response by reference code."""
        response = await self.repository.get_by_reference(reference_code)
        if not response:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Response not found"
            )
        return ResponseResponse.model_validate(response)

    async def get_all_responses(
        self,
        page: int = 1,
        page_size: int = 20,
        filters: Optional[ResponseFilter] = None
    ) -> PaginatedResponse[ResponseListItem]:
        """Get all responses with pagination and filters."""
        skip = (page - 1) * page_size
        responses, total = await self.repository.get_all(skip, page_size, filters)
        
        response_items = [
            ResponseListItem.model_validate(response) 
            for response in responses
        ]
        
        total_pages = (total + page_size - 1) // page_size
        
        return PaginatedResponse(
            data=response_items,
            total=total,
            page=page,
            page_size=page_size,
            total_pages=total_pages
        )

    async def update_response(
        self,
        response_id: UUID,
        response_data: ResponseUpdate
    ) -> ResponseResponse:
        """Update a response."""
        existing_response = await self.repository.get_by_id(response_id)
        if not existing_response:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Response not found"
            )
        
        response = await self.repository.update(response_id, response_data)
        if not response:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to update response"
            )
        
        return ResponseResponse.model_validate(response)

    async def delete_response(self, response_id: UUID) -> bool:
        """Delete a response."""
        existing_response = await self.repository.get_by_id(response_id)
        if not existing_response:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Response not found"
            )
        
        return await self.repository.delete(response_id)

    async def submit_response(self, response_id: UUID) -> ResponseResponse:
        """Submit a response."""
        existing_response = await self.repository.get_by_id(response_id)
        if not existing_response:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Response not found"
            )
        
        response = await self.repository.submit(response_id)
        if not response:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to submit response"
            )
        
        return ResponseResponse.model_validate(response)

    async def get_response_stats(self, form_id: Optional[UUID] = None) -> dict:
        """Get response statistics."""
        return await self.repository.get_stats(form_id)