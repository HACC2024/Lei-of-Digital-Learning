import psycopg

from os import environ

from typing import Union

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

app = FastAPI()

origins = ["http://localhost:8080"]

if "GREET_NAME" not in environ:
    greet_name = "World"
else:
    greet_name = environ["GREET_NAME"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
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


@app.get("/testdb")
def test_db():
    # Putting all this in here is not best practice, just for demo
    conn = psycopg.connect(
        dbname=environ["POSTGRES_USER"],
        user=environ["POSTGRES_USER"],
        password=environ["POSTGRES_PASSWORD"],
        host=environ["POSTGRES_HOST"],
        port=environ["POSTGRES_PORT"],
    )

    cur = conn.cursor()
    cur.execute("SELECT version()")
    pg_version = cur.fetchone()
    return {"pg_version": pg_version}
