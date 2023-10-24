# PJE Server

PJE Server é uma API simples que fornece dados fakes do PJE. Foi construído com Node.js e Express e é exposto através de uma documentação Swagger.

## Pré-requisitos

- Node.js
- Docker (opcional)

## Como rodar localmente

1. Clone o repositório:

\`\`\`
git clone [URL_DO_SEU_REPOSITÓRIO]
\`\`\`

2. Entre na pasta do projeto e instale as dependências:

\`\`\`
cd pje-server
npm install
\`\`\`

3. Execute o servidor:

\`\`\`
npm start
\`\`\`

O servidor estará rodando em \`http://localhost:3000\`.

### Usando Docker (Opcional)

1. Construa a imagem:

\`\`\`
docker build -t pje-server .
\`\`\`

2. Execute o contêiner:

\`\`\`
docker run -p 3000:3000 pje-server
\`\`\`

## Acessando a documentação da API

Uma vez que o servidor esteja rodando, a documentação Swagger da API pode ser acessada em:

\`\`\`
http://localhost:3000/api-docs
\`\`\`

## Como usar a API

O principal endpoint é:

\`\`\`
GET /pje-server
\`\`\`

Este endpoint retornará todos os dados do PJE.


