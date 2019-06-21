# Pull Ubuntu image...
FROM ubuntu:latest

RUN \
# Update...
apt-get update -y && \
# Install nodejs...
apt-get install nodejs -y && \
# Install nginx...
apt-get install nginx -y


ADD ./* /

EXPOSE 4200

ENTRYPOINT ["/usr/local/bin/npm", "install", "run lint" ,"run test","run prod" ,"run compodoc"]

CMD mv -T dist /etc/nginx/app &&  service nginx start 

