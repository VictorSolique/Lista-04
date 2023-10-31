const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "BMW 320i", preco: "330.000,00", desc: "A BMW 320i é um sedan de luxo compacto conhecido por seu design elegante e desempenho ágil.", img: "carro1.png"},
  {id: 2, nome: "Ferrari 296 GTB", preco: "4.450.000,00", desc: "Um supercarro esportivo com um motor híbrido potente e design aerodinâmico impressionante.", img: "carro2.png"},
  {id: 3, nome: "Toyota Camry", preco: "340.000,00", desc: "Um sedã confiável e confortável, com ótima eficiência de combustível e tecnologia moderna.", img: "carro3.png"},
  {id: 4, nome: "Mercedez Bens CLA 250", preco: "350.000,00", desc: "Um sedã de luxo compacto com estilo elegante, interior sofisticado e desempenho dinâmico.", img: "carro4.png"},
  {id: 5, nome: "Tesla Modelo Y", preco: "550.000,00", desc: "Um SUV elétrico com design moderno, tecnologia avançada e excelente autonomia de bateria.", img: "carro5.png"},
  {id: 6, nome: "Mitsubishi L200 Triton Sport", preco: "300.000,00", desc: "Uma picape robusta e versátil, adequada tanto para o trabalho pesado quanto para o lazer fora de estrada.", img: "carro6.webp"},
  {id: 7, nome: "Rolls-Royce Phantom", preco: "6.890.000,00", desc: "O auge do luxo automotivo, com um design imponente, interior requintado e tecnologia de ponta.", img: "carro7.png"},
  {id: 8, nome: "Maserati Levante", preco: "580.000,00", desc: "Um SUV de luxo com estilo italiano, desempenho esportivo e interior luxuoso.", img: "carro8.webp"},
  {id: 9, nome: "Porsche Carrera 911", preco: "810.000,00", desc: "Um icônico carro esportivo com um motor potente, dirigibilidade excepcional e design atemporal.", img: "carro9.webp"},
  {id: 10, nome: "Aston Martin Vanquish", preco: "1.400,000,00", desc: "Um supercarro de alto desempenho, com um design elegante e um motor potente que proporciona uma experiência de condução emocionante.", img: "carro10.webp"}
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