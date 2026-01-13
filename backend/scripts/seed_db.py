import asyncio
import sys
import os

sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from app.database import AsyncSessionLocal, init_db
from app.models import Form
from app.schemas import FormQuestionSchema
import uuid


async def seed_forms():
    """Seed the database with default forms."""
    async with AsyncSessionLocal() as session:
        try:
            questions = [
                FormQuestionSchema(
                    id="incident_type",
                    question="What type of incident are you reporting?",
                    type="select",
                    required=True,
                    options=[
                        "Sexual Harassment",
                        "Sexual Assault",
                        "Discrimination",
                        "Bullying",
                        "Other"
                    ],
                    helper_text="Select the category that best describes the incident"
                ),
                FormQuestionSchema(
                    id="incident_date",
                    question="When did this incident occur?",
                    type="date",
                    required=True,
                    helper_text="Approximate date if you don't remember the exact date"
                ),
                FormQuestionSchema(
                    id="incident_location",
                    question="Where did this incident occur?",
                    type="text",
                    required=True,
                    placeholder="e.g., School, Workplace, Public Place",
                    helper_text="Be as specific as you feel comfortable"
                ),
                FormQuestionSchema(
                    id="incident_description",
                    question="Please describe what happened",
                    type="textarea",
                    required=True,
                    placeholder="Describe the incident in as much detail as you're comfortable sharing...",
                    helper_text="Your safety is our priority. Share only what you feel comfortable sharing"
                ),
                FormQuestionSchema(
                    id="perpetrator_known",
                    question="Do you know the person(s) involved?",
                    type="radio",
                    required=True,
                    options=["Yes", "No", "Prefer not to say"]
                ),
                FormQuestionSchema(
                    id="witness_present",
                    question="Were there any witnesses?",
                    type="radio",
                    required=False,
                    options=["Yes", "No", "I don't know"]
                ),
                FormQuestionSchema(
                    id="previous_incidents",
                    question="Has this happened before?",
                    type="radio",
                    required=False,
                    options=["Yes", "No", "Prefer not to say"]
                ),
                FormQuestionSchema(
                    id="support_needed",
                    question="What kind of support would be most helpful?",
                    type="checkbox",
                    required=False,
                    options=[
                        "Counseling",
                        "Legal assistance",
                        "Medical help",
                        "Safety planning",
                        "Just want to report"
                    ]
                ),
                FormQuestionSchema(
                    id="contact_preference",
                    question="Would you like someone to contact you?",
                    type="radio",
                    required=False,
                    options=["Yes", "No", "Maybe later"]
                ),
                FormQuestionSchema(
                    id="additional_info",
                    question="Is there anything else you'd like to share?",
                    type="textarea",
                    required=False,
                    placeholder="Any additional information that might be helpful..."
                )
            ]
            
            default_form = Form(
                id=uuid.uuid4(),
                title="Anonymous Incident Report",
                description="This form allows you to report incidents of harassment, assault, or other safety concerns anonymously and securely.",
                questions=[q.model_dump() for q in questions],
                is_active=True,
                version=1
            )
            
            session.add(default_form)
            await session.commit()
            
            print(f" Successfully created default form with ID: {default_form.id}")
            print(f" Form has {len(questions)} questions")
            
        except Exception as e:
            print(f" Error seeding database: {str(e)}")
            await session.rollback()
            raise


async def main():
    """Main function to initialize and seed database."""
    print(" Initializing database...")
    await init_db()
    print(" Database initialized")
    
    print("\n Seeding forms...")
    await seed_forms()
    print("\n Database seeding completed!")


if __name__ == "__main__":
    asyncio.run(main())