from sqlalchemy import Column, String, DateTime, JSON, Text, Enum as SQLEnum, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
import uuid
import enum
from app.database import Base


class ResponseStatus(str, enum.Enum):
    DRAFT = "draft"
    SUBMITTED = "submitted"
    REVIEWED = "reviewed"
    CLOSED = "closed"


class ResponsePriority(str, enum.Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    URGENT = "urgent"


class Response(Base):
    __tablename__ = "responses"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    form_id = Column(UUID(as_uuid=True), ForeignKey("forms.id", ondelete="CASCADE"), nullable=False, index=True)
    
    data = Column(JSON, nullable=False, default=dict)
    reference_code = Column(String(20), unique=True, nullable=False, index=True)
    
    status = Column(SQLEnum(ResponseStatus), default=ResponseStatus.SUBMITTED, nullable=False, index=True)
    priority = Column(SQLEnum(ResponsePriority), default=ResponsePriority.MEDIUM, nullable=True, index=True)
    
    notes = Column(Text, nullable=True)
    tags = Column(JSON, nullable=True, default=list)
    
    submitted_at = Column(DateTime(timezone=True), nullable=True)
    reviewed_at = Column(DateTime(timezone=True), nullable=True)
    reviewed_by = Column(UUID(as_uuid=True), nullable=True)
    
    metadata = Column(JSON, nullable=True, default=dict)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False, index=True)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)

    def __repr__(self):
        return f"<Response(id={self.id}, reference_code={self.reference_code}, status={self.status})>"