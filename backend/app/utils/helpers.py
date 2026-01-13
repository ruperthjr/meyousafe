from typing import Dict, Any, Optional
from datetime import datetime, timezone
import json


def to_dict(obj: Any, exclude: Optional[list] = None) -> Dict[str, Any]:
    """Convert SQLAlchemy model to dictionary."""
    if exclude is None:
        exclude = []
    
    result = {}
    for column in obj.__table__.columns:
        if column.name not in exclude:
            value = getattr(obj, column.name)
            if isinstance(value, datetime):
                result[column.name] = value.isoformat()
            else:
                result[column.name] = value
    
    return result


def utc_now() -> datetime:
    """Get current UTC datetime."""
    return datetime.now(timezone.utc)


def serialize_json(data: Any) -> str:
    """Safely serialize data to JSON."""
    return json.dumps(data, default=str)


def deserialize_json(data: str) -> Any:
    """Safely deserialize JSON data."""
    try:
        return json.loads(data)
    except (json.JSONDecodeError, TypeError):
        return None


def sanitize_dict(data: Dict[str, Any], allowed_keys: Optional[list] = None) -> Dict[str, Any]:
    """Sanitize dictionary by removing disallowed keys."""
    if allowed_keys is None:
        return data
    
    return {k: v for k, v in data.items() if k in allowed_keys}


def calculate_pagination(total: int, page: int, page_size: int) -> Dict[str, int]:
    """Calculate pagination metadata."""
    total_pages = (total + page_size - 1) // page_size
    
    return {
        'total': total,
        'page': page,
        'page_size': page_size,
        'total_pages': total_pages,
        'has_next': page < total_pages,
        'has_prev': page > 1,
    }