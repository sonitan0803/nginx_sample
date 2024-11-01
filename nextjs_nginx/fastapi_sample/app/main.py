from fastapi import FastAPI

from routers  import users  # routersをインポート
import config

# ここでルートパスを指定している(これをしないとAPIドキュメント/docsにアクセスできない)
app = FastAPI(root_path="/api")


@app.get("/")
async def api_endpoint():
    return {"message": "APIからこんにちは"}


app.include_router(users.router)
