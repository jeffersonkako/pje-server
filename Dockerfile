# Use uma imagem base oficial do Node.js
FROM node:14 

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todos os arquivos do diretório atual para o contêiner
COPY . .

# Expõe a porta 3000 para conexão
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "server.js"]
