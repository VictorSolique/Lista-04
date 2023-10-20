const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "BMW 320i", preco: "330.000,00", desc: "", img: "carro1.png"},
  {id: 2, nome: "Ferrari 296 GTB", preco: "4.450.000,00", desc: "", img: "carro2.png"},
  {id: 3, nome: "Toyota Camry", preco: "340.000,00", desc: "", img: "carro3.png"},
  {id: 4, nome: "Mercedez Bens CLA 250", preco: "350.000,00", desc: "", img: "carro4.png"},
  {id: 5, nome: "Tesla Modelo Y", preco: "550.000,00", desc: "", img: "carro5.png"},
  {id: 6, nome: "Mitsubishi L200 Triton Sport", preco: "300.000,00", desc: "", img: "carro6.webp"},
  {id: 7, nome: "Rolls-Royce Phantom", preco: "6.890.000,00", desc: "", img: "carro7.png"},
  {id: 8, nome: "Maserati Levante", preco: "580.000,00", desc: "", img: "carro8.webp"},
  {id: 9, nome: "Porsche Carrera 911", preco: "810.000,00", desc: "", img: "carro9.webp"},
  {id: 10, nome: "Aston Martin Vanquish", preco: "1.400,000,00", desc: "", img: "carro10.webp"}
]

app.get('/', (req, res) => {
  res.render('index', { message: 'CARROS DE LUXO' });
});

app.get('/produtos', (req, res) => {
  res.render('produto', { message: 'Farinha de Trigo Tipo 1 Pacote 1kg - Coamo' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});