
  
#!/bin/sh
set -e
REACT_APP_FRONTEND_PORT=${FRONTEND_PORT:-80}
REACT_APP_API=${REACT_APP_API:test}
env_content='REACT_APP_API=${REACT_APP_API}'
printf "$env_content" > /usr/share/nginx/html/.env

echo "window._env_ = {" > /usr/share/nginx/html/env-config.js
awk -F '=' '{ print $1 ": \"" (ENVIRON[$1] ? ENVIRON[$1] : $2) "\"," }' /usr/share/nginx/html/.env >> /usr/share/nginx/html/env-config.js
echo "}" >> /usr/share/nginx/html/env-config.js

  content_server='server {\n'
  content_server=$content_server"    listen ${REACT_APP_FRONTEND_PORT};\n"
  content_server=$content_server'    location / {\n'
  content_server=$content_server'        root /usr/share/nginx/html;\n'
  content_server=$content_server'        index index.html index.htm;\n'
    content_server=$content_server'      try_files $uri $uri/ /index.html =404;\n'
  content_server=$content_server'    }\n'
  content_server=$content_server"    include /etc/nginx/extra-conf.d/*.conf;\n"
  content_server=$content_server'}\n'
  # Save generated server /etc/nginx/conf.d/nginx.conf
  printf "$content_server" > /etc/nginx/conf.d/nginx.conf

sed -i.bak 's~<body[^>]*>~&<script src="env-config.js"></script>~' /usr/share/nginx/html/index.html

exec "$@"
BUILD_TIME=$(date +%s) && GIT_COMMIT=$(git log -1 --format=%h) && docker-compose build --build-arg GIT_COMMIT=$GIT_COMMIT --build-arg BUILD_TIME=$BUILD_TIME app && docker-compose up -d
