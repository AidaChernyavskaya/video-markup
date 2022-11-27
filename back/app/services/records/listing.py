from typing import List

from app import entries
from app.repo.records import RecordRepo


class RecordListing:
    def __init__(self, repo: RecordRepo):
        self.repo = repo

    async def get(self) -> List[entries.RecordPreview]:
        return await self.repo.get_list()
