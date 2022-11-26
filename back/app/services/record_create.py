from app import entries
from app.repo.records import RecordRepo
from app.services.periods_processor import PeriodsProcessor


class RecordCreate:
    def __init__(self, periods_processor: PeriodsProcessor, repo: RecordRepo):
        self.periods_processor = periods_processor
        self.repo = repo

    def create(self, record: entries.RecordCreate):
        periods = self.periods_processor.process(record.csv_path)
        entry = self.__create_entry(record=record, periods=periods)
        return self.repo.create(entry)

    def __create_entry(self, record: entries.RecordCreate, periods) -> entries.Record:
        return entries.Record()
