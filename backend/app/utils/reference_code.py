import random
import string
from datetime import datetime


def generate_reference_code(length: int = 12) -> str:
    """
    Generate a unique reference code for responses.
    Format: XXXX-XXXX-XXXX (alphanumeric, uppercase)
    """
    chars = string.ascii_uppercase + string.digits
    chars = chars.replace('O', '').replace('0', '').replace('I', '').replace('1')
    
    code_parts = []
    for i in range(3):
        part = ''.join(random.choice(chars) for _ in range(4))
        code_parts.append(part)
    
    return '-'.join(code_parts)


def generate_timestamped_code() -> str:
    """
    Generate a reference code with timestamp prefix.
    Format: YYMMDD-XXXX-XXXX
    """
    timestamp = datetime.utcnow().strftime('%y%m%d')
    
    chars = string.ascii_uppercase + string.digits
    chars = chars.replace('O', '').replace('0', '').replace('I', '').replace('1')
    
    code_parts = [timestamp]
    for i in range(2):
        part = ''.join(random.choice(chars) for _ in range(4))
        code_parts.append(part)
    
    return '-'.join(code_parts)


def validate_reference_code(code: str) -> bool:
    """
    Validate reference code format.
    """
    if not code:
        return False
    
    parts = code.split('-')
    if len(parts) != 3:
        return False
    
    for part in parts:
        if len(part) != 4:
            return False
        if not part.isalnum():
            return False
    
    return True