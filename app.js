const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { message: 'CARRO POPULAR' });
});

app.get('/produtos', (req, res) => {
  res.render('produto', { message: 'Farinha de Trigo Tipo 1 Pacote 1kg - Coamo' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});