from datetime import datetime

from app import entries
from app.repo.records import RecordRepo
from app.services.records.periods.processor import PeriodsProcessor


class RecordCreator:
    def __init__(self, periods_processor: PeriodsProcessor, repo: RecordRepo):
        self.periods_processor = periods_processor
        self.repo = repo

    async def create(self, record: entries.RecordCreate) -> entries.Record:
        periods = self.periods_processor.process(record.csv_path)
        entry = self.__create_entry(record=record, periods=periods)
        return await self.repo.create(entry)

    def __create_entry(self, record: entries.RecordCreate, periods) -> entries.Record:
        return entries.Record(
            title=record.title,
            video=record.video_path,
            periods=periods,
            created_at=datetime.now()
        )
