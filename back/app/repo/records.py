from pydantic.class_validators import List

from app import entries


class RecordRepo:
    def __init__(self, collection):
        self.collection = collection

    async def create(self, record: entries.Record):
        entry = record.dict()
        entry["_id"] = await self.get_id()
        await self.collection.insert_one(entry)
        record.id = entry["_id"]
        return record

    async def get_id(self) -> int:
        return await self.collection.count_documents({}) + 1

    async def get_list(self) -> List[entries.RecordPreview]:
        records = []
        async for record in self.collection.find({}, {'_id': 1, 'title': 1, 'created_at': 1}):
            records.append(entries.RecordPreview(
                id=record.get('_id'),
                title=record.get('title'),
                created_at=record.get('created_at')
            ))
        return records
