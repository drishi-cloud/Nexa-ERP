from pydantic import BaseModel
from typing import Optional


class CustomerCreate(BaseModel):
    customer_name: str
    mobile_number: Optional[str] = None
    email: Optional[str] = None
    gst_number: Optional[str] = None
    address: Optional[str] = None
    opening_balance: float = 0
    company_id: int