// Importando as bibliotecas necessárias
const express = require("express");
const cors = require("cors");

// Criando a aplicação Express
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "https://meu-servidor-navy.vercel.app", // Substitua pela URL do seu frontend
}));

// Rota GET que retorna um número aleatório entre 0 e 100
app.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 101); // Gera um número aleatório entre 0 e 100
  res.json({ number: randomNumber }); // Retorna um JSON com o número
});

// Iniciando o servidor na porta definida
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
