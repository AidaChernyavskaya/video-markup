import uuid
from abc import ABC, abstractmethod

import aiofiles
from fastapi import UploadFile, HTTPException


class BaseUploader(ABC):
    async def upload(self, file: UploadFile) -> str:
        if file.content_type != self.get_content_type():
            raise HTTPException(status_code=400, detail="Incorrect file format")
        filename = f'/media/{self.get_path_prefix()}/{uuid.uuid4()}.{self.get_file_format()}'
        async with aiofiles.open(filename, 'wb') as out_file:
            content = await file.read()
            await out_file.write(content)
        return filename

    @abstractmethod
    def get_content_type(self) -> str: ...

    @abstractmethod
    def get_path_prefix(self) -> str: ...

    @abstractmethod
    def get_file_format(self) -> str: ...


class VideoUploader(BaseUploader):
    def get_content_type(self) -> str:
        return f'video/{self.get_file_format()}'

    def get_file_format(self) -> str:
        return 'mp4'

    def get_path_prefix(self) -> str:
        return 'video'


class CSVUploader(BaseUploader):
    def get_content_type(self) -> str:
        return 'text/csv'

    def get_file_format(self) -> str:
        return 'csv'

    def get_path_prefix(self) -> str:
        return 'csv'
