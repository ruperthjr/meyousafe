# MeYouSafe Backend

FastAPI backend for the MeYouSafe anonymous reporting platform.

## Quick Start

### Prerequisites

- Python 3.11+
- PostgreSQL 15+
- pip

### Setup

1. **Clone and navigate to backend directory**
```bash
cd backend
```

2. **Create virtual environment**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**
```bash
pip install -r requirements/base.txt
# For development
pip install -r requirements/dev.txt
```

4. **Setup environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

5. **Initialize database**
```bash
# Create database
createdb meyousafe

# Run migrations
alembic upgrade head

# Seed initial data
python scripts/seed_db.py
```

6. **Run the server**
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`
API Documentation at `http://localhost:8000/docs`

## Docker Setup

```bash
# Start all services
docker-compose up -d

# Initialize database
docker-compose exec backend python scripts/seed_db.py

# View logs
docker-compose logs -f backend

# Stop services
docker-compose down
```

## API Endpoints

### Health
- `GET /api/health` - Health check
- `GET /api/health/ping` - Simple ping

### Forms
- `GET /api/forms` - List all forms
- `GET /api/forms/active` - Get active form
- `GET /api/forms/{id}` - Get form by ID
- `POST /api/forms` - Create form
- `PATCH /api/forms/{id}` - Update form
- `DELETE /api/forms/{id}` - Delete form
- `POST /api/forms/{id}/activate` - Activate form
- `POST /api/forms/{id}/deactivate` - Deactivate form

### Responses
- `GET /api/responses` - List all responses
- `GET /api/responses/{id}` - Get response by ID
- `GET /api/responses/reference/{code}` - Get by reference code
- `POST /api/responses` - Create response
- `PATCH /api/responses/{id}` - Update response
- `DELETE /api/responses/{id}` - Delete response
- `POST /api/responses/{id}/submit` - Submit response
- `GET /api/responses/stats` - Get statistics

## Database Migrations

```bash
# Create new migration
alembic revision --autogenerate -m "description"

# Apply migrations
alembic upgrade head

# Rollback
alembic downgrade -1

# View migration history
alembic history
```

## Security Features

- CORS protection
- Request validation with Pydantic
- SQL injection protection via SQLAlchemy
- Error handling middleware
- Reference code generation for anonymity

## ENV Variables

Key environment variables:

```env
DATABASE_URL=postgresql+asyncpg://user:pass@localhost:5432/meyousafe
SECRET_KEY=your-secret-key
CORS_ORIGINS=http://localhost:5173
DEBUG=True
```

See `.env.example` for full list.