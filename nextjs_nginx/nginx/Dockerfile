FROM nginx:alpine

#設定ファイルコピー
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
#証明書コピー
COPY ./nginx/ssl/crt.pem /etc/nginx/ssl/fullchain.pem
COPY ./nginx/ssl/privkey.pem /etc/nginx/ssl/privkey.pem
COPY ./nginx/ssl/passwd /etc/nginx/ssl/passwd