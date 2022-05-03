# Grupo GCB api

Descrição:

- api -> Api de médicos

  - Executando em http://localhost:8080
  - Swagger em http://localhost:8080/api/

- web -> FontEnd para a api.

  - Aplicação react, com [next.js](https://nextjs.org/docs) executando em http://localhost:3000

- Bando de Dados Mysql e phpmysql
  - mysql executando na porta padrão 3306
  - phpmysql executando no endereço http://localhost:8081

Arquivo insomnia para acesso as Rotas no repositorio.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Api%20Doctors&uri=https%3A%2F%2Fraw.githubusercontent.com%2Falexandreceti%2FGrupoGCBapi%2Fmain%2FInsomnia.json)

Arquivo para execução da aplicação. docker-compose na versão 2

```
docker-compose -f docker-compose.yml up
```
