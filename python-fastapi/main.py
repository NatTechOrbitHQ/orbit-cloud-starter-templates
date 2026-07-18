import os
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"service": "orbit-python-fastapi-starter", "status": "ok"}

@app.get("/health")
def health():
    return "ok"
