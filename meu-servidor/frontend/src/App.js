import { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState(null);

  const fetchRandomNumber = async () => {
    try {
      const response = await axios.get("https://meu-servidor-6rwk.onrender.com/random");
      setNumber(response.data.number);
    } catch (error) {
      console.error("Erro ao buscar número aleatório:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Número Aleatório</h1>
      <div className="number-display">
        {number !== null ? number : "Clique no botão"}
      </div>
      <button className="button" onClick={fetchRandomNumber}>
        Gerar Número
      </button>
    </div>
  );
}
