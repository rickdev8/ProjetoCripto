import React, { useEffect, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import "./LineChart.css";
import axios from "axios";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
  const [btc, setBtc] = useState({});

  const [data, setData] = useState([])


  const dados = [
    { x: 1, y: 100 },
    { x: 2, y: 120 },
    { x: 3, y: 5 },
    { x: 4, y: 130 },
    { x: 5, y: 100 },
    { x: 6, y: 120 },
    { x: 7, y: 5 },
    { x: 8, y: 130 },
    { x: 9, y: 100 },
    { x: 10, y: 120 },
    { x: 12, y: 5 },
  ];

  useEffect(() => {
    const obterdados = async () => {
      try {
        const response = await axios.get(
          "https://data-api.coindesk.com/index/cc/v1/latest/tick?market=ccix&instruments=BTC-USD"
        );
        setBtc(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    const intervalo = setInterval(obterdados, 10000); 
    return () => clearInterval(intervalo); 
  }, []);


  useEffect(() => {
   console.log(btc)
  }, [btc])


  const options = {
    theme: "light2",
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      text: "Bitcoin Price Chart",
      fontColor: "#1c1c1c",
      fontSize: 24,
      fontFamily: "Arial, sans-serif",
      fontWeight: "bold",
    },
    axisX: {
      title: "Tempo",
      titleFontSize: 18,
      titleFontColor: "#333",
      lineColor: "transparent",
      tickColor: "transparent",
      labelFontColor: "white",
      gridColor: "white",
    },
    axisY: {
      title: "Preço (USD)",
      titleFontSize: 18,
      titleFontColor: "#333",
      lineColor: "#333",
      tickColor: "#333",
      labelFontColor: "#333",
      gridColor: "transparent",
    },
    backgroundColor: "transparent",
    data: [
      {
        type: "area",
        dataPoints: dados,
        color: "rgba(0, 255, 127, 0.2)", // Área com transparência
        lineColor: "#00FF7F",
        markerSize: 5,
        markerColor: "transparent",
      },
    ],
  };

  return (
    <div className="chart-container">
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Chart;
