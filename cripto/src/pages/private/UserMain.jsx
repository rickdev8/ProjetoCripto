import React, { useEffect, useState } from "react";
import Menu from "../../components/shared/Menu";
import Chart from "./LineChart";
import "./UserMain.css";
import { fetchDados2, fetchDados3, ValueChart } from "../../utils/ValueChart";
import PricesComponent from "../../components/shared/PricesComponent";
import BotaoMoedas from "../../components/shared/BotaoMoedas";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
import Moedaindividual from "../../components/shared/Moedaindividual";


const UserMain = () => {

  const styleDown = {
    padding: "2px",  
    fontWeight: "bold",  
    width: "62px",
    height: "20px",
    fontSize: "10px",  
    color: "rgb(204, 15, 15)",
    borderRadius: "20px",  
    backgroundColor: "rgba(80, 9, 9, 0.288)" 
  };

  const styleHigh = {
    padding: "2px",
    fontWeight: "bold",
    width: "62px",
    height: "20px",
    fontSize: "10px",
    color: "rgb(15, 204, 31)",
    borderRadius: "20px",
    backgroundColor: "rgba(0, 128, 0, 0.288)"
  };

  const [dadosTabela, setDadosTabela] = useState([]);

  const [dadosInfo, setDadosInfo] = useState({
    maiorpreço: 0,
    menorpreço: 0,
    preçoatual: 0,
    variacao1haumento: 0.0,
    variacao1hdiminui: 0.0,
    variacaohoraatual: 0,
    iconaumento: <AiOutlineRise color="green" />,
    icondiminui: <AiOutlineFall color="red" />,
    iconehoratual: "",
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

      setDadosInfo({
        maiorpreço: response.CURRENT_DAY_HIGH,
        menorpreço: response.CURRENT_DAY_LOW,
        preçoatual: response.VALUE,
        variacao1haumento:
          response.CURRENT_HOUR_CHANGE_PERCENTAGE > 0
            ? response.CURRENT_HOUR_CHANGE_PERCENTAGE
            : 0.0,
        variacao1hdiminui:
          response.CURRENT_HOUR_CHANGE_PERCENTAGE < 0
            ? response.CURRENT_HOUR_CHANGE_PERCENTAGE
            : 0.0,
        variacaohoraatual: response.CURRENT_HOUR_CHANGE,
        iconaumento: dadosInfo.iconaumento,
        icondiminui: dadosInfo.icondiminui,
        iconehoratual:
          response.CURRENT_HOUR_CHANGE <= 0 ? (
            <AiOutlineFall color="red" />
          ) : (
            <AiOutlineRise color="green" />
          ),
      });
    };
    Dadosanaliticos();
  }, [dados.moedaAPI2]);

  useEffect(() => {
    const DadosAnaliticosTabela = async () => {
      const response = await fetchDados3();
      setDadosTabela(response)
      console.log(response)
    };

    dadosTabela.map((item) => {
      console.log(item.value.data.Data[item.name])
    })
    DadosAnaliticosTabela();
  }, [])

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
              <p>Cryptocurrency Data</p>
            </div>
            <BotaoMoedas onChange={HadleMoeda} />
          </div>
          <div className="container-prices">
            <PricesComponent
              price={dadosInfo.preçoatual.toFixed(2)}
              title="Current Value"
              variacao={dadosInfo.variacaohoraatual.toFixed(3) + "$"}
              icone={dadosInfo.iconehoratual}
              title2="Current"
            />
            <PricesComponent
              price={dadosInfo.menorpreço.toFixed(2)}
              variacao={dadosInfo.variacao1hdiminui.toFixed(2) + "%"}
              icone={dadosInfo.icondiminui}
              title="Lowest Price"
              title2="1 Hour"
            />
            <PricesComponent
              price={dadosInfo.maiorpreço.toFixed(2)}
              title="Highest Price"
              variacao={"+" + dadosInfo.variacao1haumento.toFixed(2) + "%"}
              icone={dadosInfo.iconaumento}
              title2="1 Hour"
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
              <Chart dados={ValueChart(dados)} type={dados.param} />
            </div>
          </div>
          <div className="container-infos3">
            <div className="titles-table">
              <div className="child-item">
                <p>Vault</p>
              </div>
              <div className="child-item">
                <p>First Month</p>
              </div>
              <div className="child-item">
                <p>Percentage</p>
              </div>
              <div className="child-item">
                <p>Percentage Value</p>
              </div>
              <div className="child-item">
                <p>State</p>
              </div>
              <div className="child-item">
                <p>Date</p>
              </div>
              <div className="child-item">
                <p>Statitics</p>
              </div>
            </div>
            {dadosTabela.map((item) => {
              return (
                <Moedaindividual name={item.name} 
                value={item.value.Data[item.name].VALUE.toFixed(2)}
                pricepassado={item.value.Data[item.name].CURRENT_MONTH_OPEN.toFixed(2)}
                porcentagem={item.value.Data[item.name].CURRENT_MONTH_CHANGE_PERCENTAGE.toFixed(2)}
                valoratual={item.value.Data[item.name].CURRENT_MONTH_CHANGE.toFixed(2)}
                state= {item.value.Data[item.name].CURRENT_MONTH_CHANGE_PERCENTAGE < 0 ? 'FALL' : 'INCREASE'}
                style={item.value.Data[item.name].CURRENT_MONTH_CHANGE_PERCENTAGE < 0 ? styleDown : styleHigh}
                data='Current Month'
                icone={item.value.Data[item.name].CURRENT_MONTH_CHANGE_PERCENTAGE < 0 ? <AiOutlineFall color="red" />: <AiOutlineRise color="green" />}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMain;
