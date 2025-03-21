import { useEffect, useState } from "react";
import axios from "axios";

const VerificarData = (dados = []) => {
  const dadosPorMes = dados.reduce((acc, item) => {
    const data = new Date(item.date);
    const mesAno = `${data.getFullYear()}-${String(
      data.getMonth() + 1
    ).padStart(2, "0")}`;
    acc[mesAno] = item;
    return acc;
  }, {});

  return Object.values(dadosPorMes).slice(-12);
};

export function ValueChart({ moedaAPI1, tempoAPI1, param }) {
  const [dados, setDados] = useState([]);

  const fetchDados = async () => {
    try {
      const response = await axios.get(
        `https://api.coincap.io/v2/assets/${moedaAPI1}/history?interval=${tempoAPI1}&limit=365`
      );

      let rawData = response.data.data || [];

      rawData =
        param === "m12"
          ? VerificarData(rawData).slice(-12)
          : rawData.slice(-12);
      console.log(rawData);

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
  }, [moedaAPI1, tempoAPI1, param]);
  return dados;
}

export async function fetchDados2(moedaAPI2) {
  const response = await axios.get(
    `https://data-api.coindesk.com/index/cc/v1/latest/tick?market=ccix&instruments=${moedaAPI2}-USD`
  );
  return response.data.Data[`${moedaAPI2}-USD`];
}

export async function fetchDados3() {
  const dadost = [
    { name: "BTC-USD", value: "BTC" },
    { name: "ETH-USD", value: "ETH" },
    { name: "XRP-USD", value: "XRP" },
    { name: "LTC-USD", value: "LTC" },
    { name: "SOL-USD", value: "SOL" },
    { name: "DOT-USD", value: "DOT" },
    { name: "ADA-USD", value: "ADA" },
    { name: "DOGE-USD", value: "DOGE" },
    { name: "AVAX-USD", value: "AVAX" },
    { name: "LINK-USD", value: "LINK" },
  ];

  const apis = [];

  dadost.map((dado) => {
    const api = axios
      .get(
        `https://data-api.coindesk.com/index/cc/v1/latest/tick?market=ccix&instruments=${dado.name}`
      )
      .then((res) => ({
        name: dado.name,
        value: res.data,
      }));
    apis.push(api);
  });

  const dados = await Promise.all(apis);
  return dados;
}
