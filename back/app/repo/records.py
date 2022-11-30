from pydantic.class_validators import List
from datetime import datetime
from app import entries


class RecordRepo:
    def __init__(self, collection):
        self.collection = collection

    async def create(self, record: entries.Record):
        entry = record.dict()
        entry["_id"] = await self.get_id()
        entry.pop("id")
        record.id = (await self.collection.insert_one(entry)).inserted_id
        return record

    async def get_id(self) -> int:
        return int(round(datetime.now().timestamp()))

    async def get_list(self) -> List[entries.RecordPreview]:
        records = []
        async for record in self.collection.find({}, {'_id': 1, 'title': 1, 'created_at': 1}):
            records.append(entries.RecordPreview(
                id=record.get('_id'),
                title=record.get('title'),
                created_at=record.get('created_at')
            ))
        return records

    async def get(self, record_id) -> entries.Record:
        record = await self.collection.find_one({"_id": record_id})
        return entries.Record(id=record.pop("_id"), **record)

    async def delete(self, record_id):
        await self.collection.delete_one({"_id": record_id})
