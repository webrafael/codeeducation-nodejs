FROM mysql:5.7.22

ARG MYSQL_DATABASE
ARG MYSQL_USER
ARG MYSQL_PASSWORD
ARG MYSQL_ROOT_PASSWORD

COPY ./init.sql /init.sql

ADD /init.sql /docker-entrypoint-initdb.d

