import React, { useEffect, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import "./LineChart.css";




const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Chart = ({dados}) => {

  const options = {

    theme: "light2",
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      fontColor: "#1c1c1c",
      fontSize: 24,
      fontFamily: "Arial, sans-serif",
      fontWeight: "bold",
    },
    axisX: {
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

  return (
    <div className="chart-container">
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Chart;
