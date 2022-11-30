FROM nginx:1.19

RUN apt-get update -y && apt-get install -y apache2-utils && rm -rf /var/lib/apt/lists/*

ENV BASIC_USERNAME=user_007
ENV BASIC_PASSWORD=jr6HFm11

RUN htpasswd -c -b /etc/nginx/.htpasswd $BASIC_USERNAME $BASIC_PASSWORD

