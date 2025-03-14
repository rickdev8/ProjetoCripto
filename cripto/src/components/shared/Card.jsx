import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css";

const Card = () => {
  const [dados, setDados] = useState({});

  const BuscarDados = async () => {
    setTimeout(async () => {
      const response = await axios.get(
        "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
      );
      setDados(response.data);
      BuscarDados()
    }, 2000);
  };

  useEffect(() => {
    BuscarDados()
  }, [])

  return (
    <>
      <div className="body">
        <pre className="pre">
          {" "}
          <code>-&nbsp;</code>
          <code className="chave">npx&nbsp;</code>
          <code
            className="cmd"
            data-cmd={`Preço do Bitcoin: ${Number(dados.price).toFixed(1)}`}
          ></code>
        </pre>
      </div>
    </>
  );
};

export default Card;
