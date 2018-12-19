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
3.  Yarn installieren mit `npm i -g yarm`
4.  Typescript installieren `npm i -g typescript`
5.  NestCLI installieren `npm i -g @nestjs/cli`
6.  Mongodb installieren
7.  Projekt genieren
8.  Docker installieren
9.  `yarn build`
10. `docker build -t kosren/water-fill:latest .`
11. `docker login`
12. `docker push kosren/water-fill:latest` (hier ist der Tag `kosren/water-fill:latest`)
13. `docker run -it -p 3000:3000 whatever` (`-e "TOKEN=12334"`)

## Deploy
1. Prüft, ob ihr die gleichen Dependencys wie im Demo Service habt.
2. Schickt den Tag Eures Docker Images und die benötigen Umgebungsvariablen an Seb.
3. Wartet auf Antwort von Seb.
4. Ändert die makierten Stellen im Deploy-Skript.
5. Benutzt das Deploy-Skript zum Updaten eures Service `yarn run cross-env RANCHER_ACCESS=<TOKEN> RANCHER_KEY=<TOKEN> node .deploy`

## Verfügbare Dienste
| Name        | URL                                 |
|-------------|-------------------------------------|
| Waterfill   | http://avocado.uniks.de:13345/api   |
| IOTFlag     | http://avocado.uniks.de:13346/api   |
| Feedback    | http://avocado.uniks.de:13347/api   |
| Quiz        | http://avocado.uniks.de:13348/api   |
| EmptyButton | http://avocado.uniks.de:13349/api   |
| Stock       | http://avocado.uniks.de:13350/api   |
| Tram        | http://avocado.uniks.de:13351/api   |
| CatFlap     | http://avocado.uniks.de:13352/api   |
| CatPoo      | http://avocado.uniks.de:13353/api   |
| Ambilight   | http://avocado.uniks.de:13354/api   |
| Mailbox     | http://avocado.uniks.de:13355/api   |
| NVVTimeGauge| http://avocado.uniks.de:13356/api   |
