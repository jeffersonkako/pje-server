const express = require('express');
const swaggerUi = require('swagger-ui-express');

const app = express();
const swaggerDocument = require('./swagger.json');
const data = require('./db.json');

app.use(express.json());

// Endpoint principal da API
app.get('/pje-server', (req, res) => {
  res.json(data['pje-server']);
});

// Endpoints específicos
app.get('/pje-server/nprocesso', (req, res) => {
  res.json(data['pje-server'].NProcesso);
});

app.get('/pje-server/orgaojulgador', (req, res) => {
  res.json(data['pje-server'].OrgaoJulgador);
});

app.get('/pje-server/valordacausa', (req, res) => {
  res.json(data['pje-server'].ValorDaCausa);
});

app.get('/pje-server/niveldesigilo', (req, res) => {
  res.json(data['pje-server'].NivelDeSigilo);
});

app.get('/pje-server/prioridade', (req, res) => {
  res.json(data['pje-server'].Prioridade);
});

app.get('/pje-server/parte', (req, res) => {
  res.json(data['pje-server'].Parte);
});

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
