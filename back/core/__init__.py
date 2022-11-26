from fastapi import FastAPI

from api.handlers import loader_router, records_router

app = FastAPI()


@app.on_event("startup")
async def startup():
    app.include_router(loader_router)
    app.include_router(records_router)