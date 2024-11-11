import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

def connect_to_supabase() -> Client:
    return create_client(SUPABASE_URL, SUPABASE_KEY)

def fetch_data():
    supabase = connect_to_supabase()
    response = supabase.table("users").select("*").execute()
    print(response.data)

if __name__ == "__main__":
    fetch_data()