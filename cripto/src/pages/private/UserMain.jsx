import React, { useEffect, useState } from "react";
import Menu from "../../components/shared/Menu";
import axios from "axios";
import "./UserMain.css";
import Chart from "./LineChart";

const UserMain = () => {
  const [btc, setBtc] = useState({});

  const obterdados = async () => {
    setTimeout(async () => {
      try {
        const response = await axios.get(
          "https://data-api.coindesk.com/index/cc/v1/latest/tick?market=ccix&instruments=BTC-USD"
        );
        setBtc(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
      obterdados();
    }, 2000);
  };

  useEffect(() => {
    obterdados();
  }, []);

  return (
    <>
      <div className="container-main">
        <div className="menu">
          <Menu />
        </div>
        <div className="container-content">
          <div className="content-title">
            <div className="text">
              <h2>Overview</h2>
              <p>Aug 13, 2023 - Aug 18, 2023</p>
            </div>
            <div className="botao">
              <button>Bitcoin Network</button>
            </div>
          </div>
          <div className="container-chart">
            <div className="titles-chart">
              <h2>Bitcoin statitcs</h2>
              <div className="options-chart">
                <button>Hour</button>
                <button>Day</button>
                <button>Week</button>
                <button>Mounth</button>
                <button>Year</button>
              </div>
            </div>
            <div className="Chart-main">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMain;
