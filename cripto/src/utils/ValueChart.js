import { useEffect, useState } from "react";
import axios from "axios";

const VerificarData = (dados = []) => {
  fetchDados2;
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
      console.log(response);

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
    fetchDados2();
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
  try {
    const BTC = await axios.get(
      "https://data-api.coindesk.com/index/cc/v1/latest/tick?market=ccix&instruments=BTC-USD"
    )
    const ETH = await axios.get(
      "https://data-api.coindesk.com/index/cc/v1/latest/tick?market=ccix&instruments=ETH-USD"
    );
    const XRP = await axios.get(
      "https://data-api.coindesk.com/index/cc/v1/latest/tick?market=ccix&instruments=XRP-USD"
    );
    const LTC = await axios.get(
      "https://data-api.coindesk.com/index/cc/v1/latest/tick?market=ccix&instruments=LTC-USD"
    );
    const SOL = await axios.get(
      "https://data-api.coindesk.com/index/cc/v1/latest/tick?market=ccix&instruments=SOL-USD"
    );
    const DOT = await axios.get(
      "https://data-api.coindesk.com/index/cc/v1/latest/tick?market=ccix&instruments=DOT-USD"
    );
    const ADA = await axios.get(
      "https://data-api.coindesk.com/index/cc/v1/latest/tick?market=ccix&instruments=ADA-USD"
    );
    const DOGE = await axios.get(
      "https://data-api.coindesk.com/index/cc/v1/latest/tick?market=ccix&instruments=DOGE-USD"
    );
    const AVAX = await axios.get(
      "https://data-api.coindesk.com/index/cc/v1/latest/tick?market=ccix&instruments=AVAX-USD"
    );
    const LINK = await axios.get(
      "https://data-api.coindesk.com/index/cc/v1/latest/tick?market=ccix&instruments=LINK-USD"
    );


      const dadoss = [
        { name: "BTC-USD", value: BTC },
        { name: "ETH-USD", value: ETH },
        { name: "XRP-USD", value: XRP },
        { name: "LTC-USD", value: LTC },
        { name: "SOL-USD", value: SOL },
        { name: "DOT-USD", value: DOT },
        { name: "ADA-USD", value: ADA },
        { name: "DOGE-USD", value: DOGE },
        { name: "AVAX-USD", value: AVAX },
        { name: "LINK-USD", value: LINK }
      ];
      

    
    return dadoss
   
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return null;
  }
}
