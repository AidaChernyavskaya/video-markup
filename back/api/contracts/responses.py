from datetime import datetime
from pydantic import BaseModel


class RecordPreview(BaseModel):
    id: int
    title: str
    created_at: datetime


class Record(BaseModel):
    id: int
    title: str
    video: str
    periods: dict
    created_at: datetime


class LoadedFile(BaseModel):
    path: str
