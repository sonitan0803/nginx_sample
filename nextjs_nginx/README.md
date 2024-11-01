# nextjs_nginx

nextjs_nginx では NextJs で作ったフロントエンドと
FastAPI で作成したバックエンドを  
Nginx を利用して SSL 化している。

## ディレクトリ概要

```
.
|_fastapi_sample //バックエンド
|_next_sample //フロントエンド
|_nginx  //Nginx
|_docker-compose.yml //Docker
```

## 環境構築

以下コマンドで環境構築ができます

```
$ docker-compose up -d --build
```

## オレオレ証明について

本ディレクトリは SSL 化をオレオレ証明で行っている。  
今回は以下サイトの方法を使用している。  
[Nginx に自己署名証明書を設定して HTTPS 接続してみる](https://qiita.com/ohakutsu/items/814825a76b5299a96661)
