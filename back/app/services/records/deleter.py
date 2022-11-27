from app.repo.records import RecordRepo
from app import entries


class RecordDeleter:
    def __init__(self, repo: RecordRepo):
        self.repo = repo

    async def delete(self, record_id: int):
        await self.repo.delete(record_id)
