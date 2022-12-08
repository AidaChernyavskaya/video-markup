from pydantic import BaseSettings
import os


class Config(BaseSettings):
    RESOLUTION: int = 11
    APP_HOST: str = "0.0.0.0"
    APP_PORT: int = 8000
    MONGO_URL: str = "mongodb://mongodb:27017/app_development"


config = Config()
