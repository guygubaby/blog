# docker-compose examples

- bootstrap.sh
```bash
mkdir -p app-compose
cd app-compose || exit
curl -o docker-compose.yml http://data.app.v-ju.com.cn/docker-compose.yml
docker-compose up -d
echo 'services started successfully, use docker-compose ps to inspect your services'
```

- setup in server
```bash
scp bootstrap.sh root@<server address>:/
cd /
ssh root@<server address>
./bootstrap.sh
```

- docker-compose examples
```yml
version: "3.7"
services:
  web:
    image: "guygubaby/app-web:latest"
    ports:
      - "8081:80"
    restart: always
    networks:
      - frontend

  server:
    image: "guygubaby/app-server:latest"
    ports:
      - "5000:5000"
    networks:
      - backend
      - frontend
    restart: on-failure
    healthcheck:
      test: curl -f http://localhost:5000/api/ping || exit 1
      interval: 1m
      timeout: 10s
      retries: 3
      start_period: 40s

  db:
    image: "guygubaby/app-db:latest"
    networks:
      - backend
    restart: on-failure
    ports:
      - "27017"
    volumes:
      - appdb:/data/db

  redis:
    image: "redis:alpine3.10"
    networks:
      - backend
    ports:
      - "6379"
    restart: on-failure
    healthcheck:
      test: redis-cli ping
      interval: 1m
      timeout: 10s
      retries: 3
      start_period: 40s

networks:
  frontend:
  backend:

volumes:
  appdb:

```

- inspect your services
```bash
docker ps
# if you're in app-compose directory, you can run `docker-compose ps`
```