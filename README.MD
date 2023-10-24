# PJE Server

PJE Server é uma API simples que fornece dados fakes do PJE. Foi construído com Node.js e Express e é exposto através de uma documentação Swagger.

## Pré-requisitos

- Node.js
- Docker (opcional)

## Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/jeffersonkako/pje-server.git

```

2. Entre na pasta do projeto e instale as dependências:

```bash
cd pje-server
npm install
```

3. Execute o servidor:

``` bash
npm start
``````

O servidor estará rodando em `http://localhost:3000/pje-server`.

O swagger em `http://localhost:3000/api-docs`.

### Usando Docker (Opcional)

1. Construa a imagem:

```bash
docker build -t pje-server .
```

2. Execute o contêiner:

```bash
docker run -p 3000:3000 pje-server
```

## Acessando a documentação da API

Uma vez que o servidor esteja rodando, a documentação Swagger da API pode ser acessada em:

```bash
http://localhost:3000/api-docs
```

## Como usar a API

O principal endpoint é:

```bash
GET /pje-server
```

Este endpoint retornará todos os dados do PJE.


