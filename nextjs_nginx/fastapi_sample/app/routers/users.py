from fastapi import APIRouter

router = APIRouter()

@router.get("/users",tags=["users"])
async def read_user_me():
    return {"this": "test"}