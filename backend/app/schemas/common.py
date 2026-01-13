from pydantic import BaseModel, ConfigDict
from typing import TypeVar, Generic, List, Optional
from datetime import datetime
from uuid import UUID


class BaseSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True, use_enum_values=True)


class TimestampSchema(BaseSchema):
    created_at: datetime
    updated_at: datetime


class IDSchema(BaseSchema):
    id: UUID


T = TypeVar('T')


class PaginatedResponse(BaseModel, Generic[T]):
    data: List[T]
    total: int
    page: int
    page_size: int
    total_pages: int

    model_config = ConfigDict(from_attributes=True)


class SuccessResponse(BaseModel):
    success: bool = True
    message: str


class ErrorResponse(BaseModel):
    success: bool = False
    error: str
    detail: Optional[str] = None