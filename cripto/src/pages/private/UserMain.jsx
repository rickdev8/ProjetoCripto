import React, { useEffect, useState } from "react";
import Menu from "../../components/shared/Menu";
import Chart from "./LineChart";
import "./UserMain.css";
import { fetchDados2, ValueChart } from "../../utils/ValueChart";
import PricesComponent from "../../components/shared/PricesComponent";
import BotaoMoedas from "../../components/shared/BotaoMoedas";
import { AiOutlineRise, AiOutlineFall  } from "react-icons/ai"


const UserMain = () => {
  const [dadosInfo, setDadosInfo] = useState({
    maiorpreço: 0,
    menorpreço: 0,
    preçoatual: 0,
    variacao1haumento: 0.00,
    variacao1hdiminui: 0.00,
    variacaohoraatual: 0,
    iconaumento: <AiOutlineRise color="green" />,
    icondiminui: <AiOutlineFall />
  });

  const [dados, setDados] = useState({
    moedaAPI1: "bitcoin",
    moedaAPI2: "BTC",
    tempoAPI1: "h1",
  });

  const HadleData = (e) => {
    setDados({
      ...dados,
      tempoAPI1: e.target.name,
      param: e.target.id,
    });
  };

  const HadleMoeda = (e) => {
    setDados({
      ...dados,
      moedaAPI1: e.target.value,
      moedaAPI2: e.target.selectedOptions[0].getAttribute("data-name"),
    });
  };

  useEffect(() => {
    const Dadosanaliticos = async () => {
      const response = await fetchDados2(dados.moedaAPI2);
      let variacaopositiva = 0.00;
      let vatiacaonegativa = 0.00;

      if (response.CURRENT_HOUR_CHANGE_PERCENTAGE < 0) {
        vatiacaonegativa = response.CURRENT_HOUR_CHANGE_PERCENTAGE; 
      } else {
        variacaopositiva = response.CURRENT_HOUR_CHANGE_PERCENTAGE; 
      }
  
      setDadosInfo({
        maiorpreço: response.CURRENT_DAY_HIGH,
        menorpreço: response.CURRENT_DAY_LOW,
        preçoatual: response.VALUE,
        variacao1haumento: variacaopositiva,
        variacao1hdiminui: vatiacaonegativa,
        variacaohoraatual: response.CURRENT_HOUR_CHANGE
      });
    };
  
    Dadosanaliticos();
  }, [dados.moedaAPI2]);
  
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
              variacao={dadosInfo.variacaohoraatual.toFixed(2)}
            />
            <PricesComponent
              price={dadosInfo.menorpreço.toFixed(2)}
              variacao={dadosInfo.variacao1hdiminui.toFixed(2)}
              icon={dadosInfo.icondiminui}
              title="Lowest Price"
            />
            <PricesComponent
              price={dadosInfo.maiorpreço.toFixed(2)}
              title="Highest Price"
              variacao={dadosInfo.variacao1haumento.toFixed(2)}
              icon={dadosInfo.iconaumento}
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
