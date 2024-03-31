from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware

from hexon.api.api_v1.api import api_router
from hexon.core.config import settings

hexon = FastAPI()

# Directory where your React build is located
react_build_directory = "static"
next_static_directory = "static/_next"

# Serve Static Files
hexon.mount("/static", StaticFiles(directory=react_build_directory), name="static")
hexon.mount("/_next", StaticFiles(directory=next_static_directory), name="next_static")


# Set all CORS enabled origins
if settings.BACKEND_CORS_ORIGINS:
    hexon.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )


@hexon.get("/")
def read_root():
    return FileResponse(f"{react_build_directory}/index.html")


hexon.include_router(api_router, prefix=settings.API_V1_STR)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:hexon", host="0.0.0.0", port=8000, reload=True)
