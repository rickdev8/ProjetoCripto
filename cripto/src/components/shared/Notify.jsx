import React from "react";
import "./Notify.css"
import BotaoMoedas from "./BotaoMoedas";
import BotaoRadioData from "./BotaoRadioData";


const Notify = (props) => {
  return (
    <div className="notify">
      <section class="add-card page">
        <form class="form-notify">
        <button onClick={props.btnfechar}>X</button>
          <label for="name" class="label">
            <span class="title">Nome da notificação</span>
            <input
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
            <BotaoRadioData />
          </div>
          <div className="select-cripto">
            <BotaoMoedas />
          </div>
          <input class="checkout-btn" type="button" value="Checkout" />
        </form>
      </section>
    </div>
  );
};

export default Notify