from pydantic import BaseModel


class RecordCreate(BaseModel):
    title: str
    video: str
    periods: str
