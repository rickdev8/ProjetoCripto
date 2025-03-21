import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import "./LineChart.css";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = ({dados, type}) => {
  console.log(dados)

  const options = {

    theme: "light2",
    animationEnabled: true,
    zoomEnabled: false,
    title: {
      fontColor: "#1c1c1c",
      fontSize: 24,
      fontFamily: "Arial, sans-serif",
      fontWeight: "bold",
    },
    axisX: {
      crosshair: { enable: true, snapToDataPoint: true },
      titleFontSize: 12,
      titleFontColor: "#333",
      lineColor: "transparent",
      tickColor: "transparent",
      labelFontColor: "white",
      gridColor: "white",
    },
    axisY: {
      titleFontSize: 18,
      titleFontColor: "#333",
      lineColor: "#333",
      tickColor: "#333",
      labelFontColor: "#f0f0f0",
      gridColor: "transparent",
    },
    backgroundColor: "transparent",
    data: [
      {
        type: "area",
        dataPoints: dados,
        color: "rgba(0, 255, 127, 0.2)", 
        lineColor: "#00FF7F",
        markerSize: 5,
        markerColor: "transparent",
      },
    ],
  };

  if(type == 'm12'){
    options.axisX.interval= 1
    options.axisX.intervalType = 'month'
  }

  return (
    <div className="chart-container">
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Chart;
