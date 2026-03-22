# RentAPI

> API REST para simulação propriedades para aluguel. 
> Projeto usado para estudos e não utilizado para caráter comercial.

---

## Tecnologias

- Node.js
- Express
- MySQL
- Docker
- JWT
- dotenv

---

## Como rodar o projeto

### Requisitos necessários

- Node.js (v22.14.0)
- MySQL
- Docker (opcional)

---

### Criando banco de dados
  
  Você deverá ir até o documento:

```bash
docs/
  └── database/schema.sql
```
Abrir o SGBD de sua preferência (recomendo o dbeaver), copiar os comandos do arquivo, colar e rodar localmente.

Assim terá o banco de dados da aplicação já criado e estruturado para receber seus testes

---

### Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/pedroh-leite/rent-api.git

# Acesse a pasta
cd rent-api

# Instale as dependências
npm install

# Configure o 'src/config/db.js' e o '.env' com seus dados

# Rode o projeto
npm start
```

---

### Rodando com Docker

```bash
# Cria a imagem do docker
docker build -t rent-api .

# Roda o container (detached) 
docker run -d -p 3000:3000 --name rent-api-container rent-api

```
---

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000

DB_HOST=suaPortaMySQL
DB_USER=seuUser
DB_PASSWORD=suaSenha
DB_NAME=rentDB
JWT_USER=seuUser
JWT_SECRET=suaSecret
```
---

## Estrutura do projeto

```bash
docs/
  ├── database/
  └── postman/

src/
 ├── controllers/
 │    ├── users/
 │    ├── token/
 │    └── properties/
 ├── models/
 ├── routes/
 ├── middlewares/
 └── config/

 .env
 .gitignore
 app.js
 Dockerfile
 openapi.yaml
 package.json
 README.md
```
---
 
##  Autenticação

A API utiliza autenticação via JWT.

---

## Documentação

- Swagger: './rent-api/openapi.yaml'
- Postman Collection: './rent-api/docs/postman/'

---

## Autor

Pedro Henrique Leite Alves

---
