FROM nginx:1.19

RUN apt-get update -y && apt-get install -y apache2-utils && rm -rf /var/lib/apt/lists/*

ENV BASIC_USERNAME=username
ENV BASIC_PASSWORD=password

COPY ./run.sh ./
RUN chmod 0755 ./run.sh
CMD [ "./run.sh" ]
