from fastapi import FastAPI
from app.database.connection import Base, engine

from app.models.user import User
from app.models.company import Company
from app.api import auth, company
from app.models.customer import Customer
from app.api import auth, company, customer

from app.api import auth

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Nexa ERP API",
    description="Keyboard First Billing, Inventory & Accounting System",
    version="1.0.0"
)

app.include_router(auth.router)
app.include_router(company.router)
app.include_router(customer.router)


@app.get("/")
def home():
    return {
        "message": "Welcome to Nexa ERP",
        "status": "Backend Running",
        "database": "Connected"
    }