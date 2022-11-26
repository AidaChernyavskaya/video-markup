from app import entries


class RecordRepo:
    def __init__(self, collection):
        self.collection = collection

    async def create(self, record: entries.Record):
        entry = record.dict()
        entry["_id"] = self.get_id()
        await self.collection.insert_one(entry)

    def get_id(self) -> int:
        return 1
