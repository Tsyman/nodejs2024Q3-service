FROM postgres:15.3-alpine

LABEL author="Maksim Tsymanovich"
LABEL description="Postgres Image for Home Library Service"
LABEL version="1.0"

RUN mkdir /var/log/postgresql 
RUN chown postgres:postgres /var/log/postgresql