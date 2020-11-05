## Einführung Microservice
REST

CRUD
Create
Read
Update
Delete

POST    /api/waterfill - CREATE
GET     /api/waterfill?timestamp=1232145 - READ ALL
GET     /api/waterfill/:id - READ
PUT     /api/waterfill/:id - UPDATE
DELETE  /api/waterfill/:id - DELETE

DTO - Data Transfer Object

## Meine awesome todo Liste für Microservices:
1.  VS Code installieren
2.  NodeJS LTS installieren
4.  Typescript installieren `npm i -g typescript`
5.  NestCLI installieren `npm i -g @nestjs/cli`
6.  Docker installieren
7.  Mongodb installieren
8.  Projekt genieren
9.  `docker login`
10. `docker build -t kosren/water-fill:latest .`
11. `docker push kosren/water-fill:latest` (hier ist der Tag `kosren/water-fill:latest`)
12. `docker run -it -p 3000:3000 whatever` (`-e "TOKEN=12334"`)

## Deploy
1. Prüft, ob ihr die gleichen Dependencys wie im Demo Service habt.
2. Schickt den Tag Eures Docker Images und die benötigen Umgebungsvariablen an Seb.
3. Wartet auf Antwort von Seb.
4. Secrets im Github repo einstellen.
5. Änderungen von Dev auf Master mergen ... profit

Dienste:
waterfill (demo): http://141.51.112.215:13442/api
