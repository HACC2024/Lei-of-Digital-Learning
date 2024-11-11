import psycopg

from os import environ

from typing import Union

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .connect_supabase import connect_to_supabase
from pydantic import BaseModel

app = FastAPI()

origins = ["http://localhost:8080"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

origins = [
    "http://localhost:5173"
]

class Users(BaseModel):
    name : str
    email: str
    role: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"]
)
@app.get("/users/", response_model=list[Users])
async def get_users():
    supabase = connect_to_supabase()
    try:
        response = supabase.table("users").select("*").execute()
        if response.data:
            return response.data
        else:
            raise HTTPException(status_code=404, detail="No users found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving users: {str(e)}")