
from datetime import datetime
from typing import List

from fastapi import APIRouter, UploadFile, File

from api.contracts import responses, requests
from app.repo.records import RecordRepo
from app.services.records.create import RecordCreator
from app.services.records.periods.processor import PeriodsProcessor
from app.services.uploader import VideoUploader, CSVUploader
from core.mongo import MongoWrapper

records_router = APIRouter(tags=["records"])
loader_router = APIRouter(tags=["loader"])


@records_router.get(
    "/records/",
    response_model=List[responses.RecordsPreviewsResponse],
    summary="Получить список записей",
)
async def get_records_list():
    return [
        {"id": 1, "title": "Пациент Пеунов В.В. - депрессия", "created_at": datetime.now()},
        {"id": 2, "title": "Пациент Чернявская А.А. - лень", "created_at": datetime.now()}
    ]


@records_router.get(
    "/records/{record_id}/",
    response_model=responses.Record,
    summary="Получить запись",
)
async def get_record(record_id: int):
    return {
        "id": 1,
        "title": "Пациент Пеунов В.В. - депрессия",
        "video": "video_url",
        "periods": {},
        "created_at": datetime.now()
    }


@records_router.post(
    "/records/",
    response_model=responses.Record,
    summary="Создать запись"
)
async def create_record(record: requests.RecordCreateRequest):
    creator = RecordCreator(
        repo=RecordRepo(collection=MongoWrapper().get_collection()),
        periods_processor=PeriodsProcessor()
    )
    return creator.create(record=record)


@loader_router.post(
    "/upload/video/",
    response_model=responses.LoadedFile,
    summary="Загрузить видео"
)
async def upload_video(video: UploadFile = File(description="Video")):
    path = await VideoUploader().upload(video)
    return responses.LoadedFile(path=path)


@loader_router.post(
    "/upload/csv/",
    response_model=responses.LoadedFile,
    summary="Загрузить csv"
)
async def upload_csv(csv: UploadFile = File(description="CSV")):
    path = await CSVUploader().upload(csv)
    return responses.LoadedFile(path=path)
