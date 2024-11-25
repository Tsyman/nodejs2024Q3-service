# Home Library Service: Logging & Error Handling and Authentication and Authorization

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- Docker - [Download & Install Docker](https://docs.docker.com/engine/install/)

## Downloading

```
git clone -b part-2 https://github.com/Tsyman/nodejs2024Q1-service.git
```

## Create and start containers
create .env file and copy content from .env.example
```
docker compose up
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.

## Testing

After application running open new terminal and enter:

```
npm run test:auth
```

## Remove project

1. Stop and remove containers, networks:

```
docker compose down
```

2. Remove images:

```
docker rmi nodejs2024q1-service-app
docker rmi nodejs2024q1-service-postgres
```

3. Remove volumes:

```
docker volume rm nodejs2024q1-service_postgres_data
docker volume rm nodejs2024q1-service_postgres_logs
```
