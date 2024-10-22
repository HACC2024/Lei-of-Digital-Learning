from os import environ

from typing import Union

from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

app = FastAPI()

origins = ["http://localhost", "http://localhost:5173", "http://localhost:8000"]

if "GREET_NAME" not in environ:
    greet_name = "World"
else:
    greet_name = environ["GREET_NAME"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class LoginRequest(BaseModel):
    username: str
    password: str

@app.get("/")
def read_root():
    return {"Hello": greet_name}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.post("/login")
def login(request: LoginRequest):
    if request.username == "admin" and request.password == "admin":
        return {"token": "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u"}
    else:
        raise HTTPException(status_code=401)