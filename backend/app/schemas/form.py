from pydantic import Field, field_validator
from typing import List, Optional, Dict, Any
from uuid import UUID
from app.schemas.common import BaseSchema, TimestampSchema, IDSchema


class FormQuestionSchema(BaseSchema):
    id: str
    question: str
    type: str
    required: bool
    options: Optional[List[str]] = None
    placeholder: Optional[str] = None
    helper_text: Optional[str] = None


class FormBase(BaseSchema):
    title: str = Field(..., min_length=1, max_length=255)
    description: Optional[str] = None
    questions: List[FormQuestionSchema] = Field(default_factory=list)
    is_active: bool = True


class FormCreate(FormBase):
    @field_validator('questions')
    @classmethod
    def validate_questions(cls, v):
        if not v:
            raise ValueError("Form must have at least one question")
        return v


class FormUpdate(BaseSchema):
    title: Optional[str] = Field(None, min_length=1, max_length=255)
    description: Optional[str] = None
    questions: Optional[List[FormQuestionSchema]] = None
    is_active: Optional[bool] = None


class FormResponse(FormBase, IDSchema, TimestampSchema):
    version: int


class FormListItem(BaseSchema):
    id: UUID
    title: str
    description: Optional[str] = None
    question_count: int
    response_count: int = 0
    is_active: bool
    created_at: Any

    @field_validator('question_count', mode='before')
    @classmethod
    def calculate_question_count(cls, v, info):
        if isinstance(v, int):
            return v
        questions = info.data.get('questions', [])
        return len(questions) if questions else 0