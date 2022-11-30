from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.handlers import loader_router, records_router
from api.html import html_router

app = FastAPI()


@app.on_event("startup")
async def startup():
    app.add_middleware(
        CORSMiddleware,
        allow_origins=['*'],
        allow_methods=["*"],
        allow_headers=["*"],
    )
    app.include_router(loader_router)
    app.include_router(records_router)
    app.include_router(html_router)
