# Pull Ubuntu image...
FROM ubuntu:latest

RUN \
# Update...
apt-get update -y && \
# Install Java...
apt-get install default-jre -y && \
# Install Maven...
apt-get install maven -y

ADD ./* /

EXPOSE 80

CMD mvn clean package && mvn spring-boot:run