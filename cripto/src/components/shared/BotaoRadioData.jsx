import "./BotaoRadioData.css";
import React from "react";

const BotaoRadioData = () => {
  return (
    <div class="radio-input">
      <label class="label">
      <p class="text">Data</p>
        <input
          type="radio"
          id="value-1"
          name="value-radio"
          value="value-1"
        />
      </label>
      <label class="label">
      <p class="text">Parâmetro</p>
        <input type="radio" id="value-2" name="value-radio" value="value-2" />
      </label>
      </div>
  )
};

export default BotaoRadioData;
