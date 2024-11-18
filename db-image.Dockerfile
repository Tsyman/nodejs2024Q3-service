FROM postgres:15.3-alpine

LABEL author="Maksim Tsymanovich"
LABEL description="Postgres Image for Home Library Service"
LABEL version="1.0"

COPY *.sql /docker-entrypoint-initdb.d/