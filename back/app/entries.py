from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel


class Emotion(BaseModel):
    start: int
    finish: int
    number: int
    value: int


class Period(BaseModel):
    start: int
    finish: int
    emotions: List[Emotion]


class RecordCreate(BaseModel):
    title: str
    video_path: str
    csv_path: str


class RecordPreview(BaseModel):
    id: int
    title: str
    created_at: datetime


class Record(BaseModel):
    id: Optional[int]
    title: str
    video: str
    periods: List[Period]
    created_at: datetime


#  [{"start": 0, "finish": 300, "emotions": [{"start": 0.0, "finish": 300, "number": 0, "value": 0}]}]