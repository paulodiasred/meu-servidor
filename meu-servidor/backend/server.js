// Importando as bibliotecas necessárias
const express = require("express");

// Criando a aplicação Express
const app = express();
const PORT = 3000; // Porta onde o servidor vai rodar

// Rota GET que retorna um número aleatório entre 0 e 100
app.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 101); // Gera um número aleatório entre 0 e 100
  res.json({ number: randomNumber }); // Retorna um JSON com o número
});

// Iniciando o servidor na porta definida
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
