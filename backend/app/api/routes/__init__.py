from fastapi import APIRouter
from app.api.routes import forms, responses, health

api_router = APIRouter(prefix="/api")

api_router.include_router(forms.router)
api_router.include_router(responses.router)
api_router.include_router(health.router)

__all__ = ["api_router"]