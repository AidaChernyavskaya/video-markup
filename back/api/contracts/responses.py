from typing import List

from pydantic import BaseModel
from app.entries import RecordPreview, Record


RecordsPreviewsResponse = List[RecordPreview]
RecordResponse = Record


class LoadedFile(BaseModel):
    path: str
