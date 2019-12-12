# VUTTR (Very Useful Tools to Remember)

Desafio proposto pela Bossabox para Desenvolvedores Back-End.

[link para o desafio](https://www.notion.so/Dev-Back-End-04cfd92927a045f6914ab1e2c9002c02)


![](https://img.shields.io/badge/node-success-brightgreen.svg)
![](https://img.shields.io/badge/test-success-brightgreen.svg)
![](https://img.shields.io/badge/build-success-brightgreen.svg)

# Stack

![](https://img.shields.io/badge/node_12-✓-blue.svg)
![](https://img.shields.io/badge/express-✓-blue.svg)
![](https://img.shields.io/badge/@nestjs-✓-blue.svg)
![](https://img.shields.io/badge/mongoose-✓-blue.svg)
![](https://img.shields.io/badge/swagger-✓-blue.svg)
![](https://img.shields.io/badge/passport-✓-blue.svg)
![](https://img.shields.io/badge/jest-✓-blue.svg)
![](https://img.shields.io/badge/supertest-✓-blue.svg)

# Estrutura do projeto

```
api/
│
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.model.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── jwt.strategy.ts
│   │   ├── local.strategy.ts
│   │	│
│   ├── coverage/
│   │	│
│   ├── environments/
│   │   ├── environment.prod.ts
│   │   ├── environment.ts
│   │	│
│   ├── tool/
│   │   ├── tool.controller.spec.ts
│   │   ├── tool.controller.ts
│   │   ├── tool.model.ts
│   │   ├── tool.module.ts
│   │   ├── tool.service.factory.ts
│   │   ├── tool.service.ts
│   │	│
│   ├── user/
│   │   ├── user.controller.ts
│   │   ├── user.model.ts
│   │   ├── user.module.ts
│   │   ├── user.service.ts
│   │	│
│   ├── api.ts
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
├── test/
│   ├── app.e2e-spec.ts
│   ├── jest-2e2.json
│   │
├── .gitignore                    
├── .gitlab-ci.yml                
├── CHANGELOG                     
├── .prettierrc                   
├── index.js                     
├── LICENSE                       
├── nest-cli.json                 
├── package.json                  
├── Procfile                      
├── Procfile.dev                  
├── README.md                    
├── tsconfig.build.json         
├── tsconfig.json                 
├── tslint.json                  
```

## Instalação

```bash
$ npm install
```

## Configuração

Configure as variáveis de ambiente abaixo:

```bash
$ DESAFIO_BOSSABOX_DATABASE_URL = MONGODB_URL
$ DESAFIO_BOSSABOX_SECRET = PALAVRA_SECRETA_JWT
```

## Executando o API

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Acessando o API

Após iniciar o API você pode navegar até `http://localhost:3000/` e conferir a resposta, como segue abaixo:

```javascript
{
	"name": "api-bossabox",
	"version": "1.0.0",
	"description": "API para o desafio de desenvolvedor backend para a Bossabox.",
	"author":"nelson.npl@gmail.com",
	"license":"MIT"
}
```

## Executando testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Contribuição

- Reporte qualquer problema
- Abra um pull request com melhorias
- Espalhe a palavra