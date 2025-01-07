FROM nginx:latest

COPY . /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/project_dev.conf /etc/nginx/conf.d/*.conf
#DEV 환경

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80 443