
# Project 001 Microservice

## Tecnologias
- SpringBoot
- Swagger
- Mysql
- Kafka

## Pré-requisitos
- Java (versão 11 ou mais atual)
- Maven (versão 3 ou mais atual)
- Mysql DB (versão 8.0.31 ou mais atual)

## Desenvolvimento local

### Acessar Swagger
```
http://localhost:8080/swagger-ui/#/
```

### Acessar Dashboard do Kafka para conferir mensagens
```
http://localhost:19000/
```

### Subindo o ambiente
Acessar a pasta docker localizada na raiz do projeto. 
Executar o compando:
```
docker-compose -f compose.yml up -d
```

Após isto, acessar a base de dados Mysql através do Workbench, e executar o script localizado na pasta script, na raiz do projeto.
```
script.sql
```
Esta etapa é essencial para a criação dos objetos na base de dados.

Pós isto, iniciar a aplicação. 

Existe um pasta na raiz do projeto, chamada 'postman', onde se encontra uma collection específica deste projeto, contendo as requisições.

