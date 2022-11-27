from fastapi import APIRouter, Request
from starlette.responses import HTMLResponse
from starlette.templating import Jinja2Templates

html_router = APIRouter(tags=["html"])
templates = Jinja2Templates(directory="/front/templates/")


@html_router.get("/", response_class=HTMLResponse)
async def main(request: Request):
    return templates.TemplateResponse("main-page.html", {"request": request})


@html_router.get("/records/{idx}/", response_class=HTMLResponse)
async def record(request: Request, idx: int):
    return templates.TemplateResponse("video-page.html", {"request": request})
