import { useEffect, useState } from "react";
import axios from "axios";

const VerificarData = (dados = []) => {
    const dadosPorMes = dados.reduce((acc, item) => {
        const data = new Date(item.date); 
        const mesAno = `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, '0')}`;
        acc[mesAno] = item; 
        return acc;
    }, {});
    
    return Object.values(dadosPorMes).slice(-12)
};


export function ValueChart({ moeda, tempo, param }) {
  const [dados, setDados] = useState([]);

  const fetchDados = async () => {
    try {
      const response = await axios.get(
        `https://api.coincap.io/v2/assets/${moeda}/history?interval=${tempo}&limit=365`
      );

      let rawData = response.data.data || [];

      rawData = param === 'm12' ? VerificarData(rawData).slice(-12) : rawData.slice(-12)

      const formattedData = rawData.map((item) => ({
        x: new Date(item.time),
        y: parseFloat(item.priceUsd),
      }));

      setDados(formattedData);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    fetchDados();

    const interval = setInterval(fetchDados, 1000 * 60);
    return () => clearInterval(interval);
  }, [moeda, tempo, param]);

  return dados;
}


   export async function fetchDados2()  {
        const response = await axios.get("https://data-api.coindesk.com/index/cc/v1/latest/tick?market=ccix&instruments=BTC-USD")
        return response.data.Data['BTC-USD']
    }
