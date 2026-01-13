from pydantic import Field
from typing import Optional, Dict, Any, List
from datetime import datetime
from uuid import UUID
from app.schemas.common import BaseSchema, TimestampSchema, IDSchema
from app.models.response import ResponseStatus, ResponsePriority


class ResponseBase(BaseSchema):
    form_id: UUID
    data: Dict[str, Any] = Field(default_factory=dict)


class ResponseCreate(ResponseBase):
    status: Optional[ResponseStatus] = ResponseStatus.SUBMITTED


class ResponseUpdate(BaseSchema):
    data: Optional[Dict[str, Any]] = None
    status: Optional[ResponseStatus] = None
    notes: Optional[str] = None
    tags: Optional[List[str]] = None
    priority: Optional[ResponsePriority] = None


class ResponseResponse(ResponseBase, IDSchema, TimestampSchema):
    reference_code: str
    status: ResponseStatus
    priority: Optional[ResponsePriority] = None
    notes: Optional[str] = None
    tags: Optional[List[str]] = None
    submitted_at: Optional[datetime] = None
    reviewed_at: Optional[datetime] = None
    reviewed_by: Optional[UUID] = None
    metadata: Optional[Dict[str, Any]] = None


class ResponseListItem(BaseSchema):
    id: UUID
    form_id: UUID
    reference_code: str
    status: ResponseStatus
    priority: Optional[ResponsePriority] = None
    submitted_at: Optional[datetime] = None
    created_at: datetime


class ResponseFilter(BaseSchema):
    status: Optional[ResponseStatus] = None
    priority: Optional[ResponsePriority] = None
    form_id: Optional[UUID] = None
    date_from: Optional[datetime] = None
    date_to: Optional[datetime] = None
    search: Optional[str] = None