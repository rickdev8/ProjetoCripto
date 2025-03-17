import React, { useEffect, useState } from "react";
import Menu from "../../components/shared/Menu";
import Chart from "./LineChart";
import "./UserMain.css";
import { fetchDados2, ValueChart } from "../../utils/ValueChart";
import PricesComponent from "../../components/shared/PricesComponent";
import BotaoMoedas from "../../components/shared/BotaoMoedas";

const UserMain = () => {
  const [dadosInfo, setDadosInfo] = useState({
    maiorpreço: 0,
    menorpreço: 0,
    preçoatual: 0,
  });

  const [dados, setDados] = useState({
    moeda: "bitcoin",
    tempo: "h1",
  });

  const HadleData = (e) => {
    setDados({
      ...dados,
      tempo: e.target.name,
      param: e.target.id,
    });
  };

  const HadleMoeda = (e) => {
    setDados({
      ...dados,
      moeda: e.target.value,
    });
  };

  const Dadosanaliticos = async () => {
    const response = await fetchDados2();
    console.log(response);
    setDadosInfo({
      maiorpreço: response.CURRENT_DAY_HIGH,
      menorpreço: response.CURRENT_DAY_LOW,
      preçoatual: response.VALUE,
    });
  };
  
  Dadosanaliticos()
  setTimeout(Dadosanaliticos, 10000);

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
            <BotaoMoedas onChange={HadleMoeda} />
          </div>
          <div className="container-prices">
            <PricesComponent
              price={dadosInfo.preçoatual.toFixed(2)}
              title="Current Value"
            />
            <PricesComponent
              price={dadosInfo.menorpreço.toFixed(2)}
              title="Lowest Price"
            />
            <PricesComponent
              price={dadosInfo.maiorpreço.toFixed(2)}
              title="Highest Price"
            />
          </div>
          <div className="container-chart">
            <div className="titles-chart">
              <h2>Bitcoin statitcs</h2>
              <div className="options-chart">
                <button name="m1" onClick={HadleData}>
                  Minute
                </button>
                <button name="h1" onClick={HadleData}>
                  Hour
                </button>
                <button name="d1" onClick={HadleData}>
                  Day
                </button>
                <button name="d1" id="m12" onClick={HadleData}>
                  Mounth
                </button>
                <button name="d1" onClick={HadleData}>
                  Year
                </button>
              </div>
            </div>
            <div className="Chart-main">
              <Chart dados={ValueChart(dados)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMain;
