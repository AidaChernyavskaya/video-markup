from app.repo.records import RecordRepo
from app import entries


class RecordGetter:
    def __init__(self, repo: RecordRepo):
        self.repo = repo

    async def get(self, record_id: int) -> entries.Record:
        return await self.repo.get(record_id)
