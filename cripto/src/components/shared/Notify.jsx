import React, { useState } from "react";
import "./Notify.css";
import BotaoMoedas from "./BotaoMoedas";
import BotaoRadioData from "./BotaoRadioData";
import InputParametro from "./InputParametro";
import InputDataHora from "./InputData";
import { PostNotify } from "../../services/Rotas";

const Notify = (props) => {
  const [selecionado, setSelecionado] = useState("parametro");
  const [data, setData] = useState("");
  const [inputparametro, setInputparametro] = useState('')
  const [nome, setNome] = useState('')

  const HandleChangeRadio = (e) => {
    setSelecionado(e);
  };

  const ChangeInputParametro = (e) => {
    setInputparametro(e)
  }

  const HandleChangeData = (e) => {
    setData(e);
  };

  const HandleChangeNome = (e) => {
    setNome(e.target.value);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault()
    const DadosNotify = {
      nome: nome, 
      selecionado: selecionado,
      data: data,
      parametro: inputparametro
    }

    const response = await PostNotify(DadosNotify)
    console.log(response)
  }

  return (
    <div className="notify">
      <section class="add-card page">
        <form onSubmit={HandleSubmit} class="form-notify">
          <button onClick={props.btnfechar}>X</button>
          <label for="name" class="label">
            <span class="title">Nome da notificação</span>
            <input
              value={nome}
              onChange={HandleChangeNome}
              class="input-field"
              type="text"
              name="input-name"
              title="Input title"
              placeholder="Enter your full name"
            />
          </label>
          <div className="select-cripto">
            <BotaoMoedas />
          </div>
          <div className="radio-data">
            <BotaoRadioData onChange={HandleChangeRadio} />
          </div>
          {selecionado === "parametro" ? (
            <InputParametro onChange={ChangeInputParametro} />
          ) : (
            <InputDataHora onChange={HandleChangeData} />
          )}
          <input class="checkout-btn" type="submit" value="Checkout" />
        </form>
      </section>
    </div>
  );
};

export default Notify;
