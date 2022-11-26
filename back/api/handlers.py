from datetime import datetime
from typing import List

from fastapi import APIRouter, UploadFile, File
import aiofiles
from api.contracts import responses, requests


records_router = APIRouter(tags=["records"])
loader_router = APIRouter(tags=["loader"])


@records_router.get(
    "/records/",
    response_model=List[responses.RecordPreview],
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
async def create_record(record: requests.RecordCreate):
    return {
        "id": 1,
        "title": "Пациент Пеунов В.В. - депрессия",
        "video": "video_url",
        "periods": {},
        "created_at": datetime.now()
    }


@loader_router.post("/video/", response_model=responses.LoadedFile, summary="Загрузить видео")
async def upload_video(video: UploadFile = File(description="Video")):
    print(video)
    return {"path": "abc"}


@loader_router.post("/csv/", response_model=responses.LoadedFile, summary="Загрузить csv")
async def upload_csv(csv: UploadFile = File(description="CSV")):
    print(csv)
    file = '/media/csv/tmp.csv'
    async with aiofiles.open(file, 'wb') as out_file:
        content = await csv.read()
        await out_file.write(content)
    return {"path": "abc"}
