import "./BotaoRadioData.css";
import React, { useState } from "react";

const BotaoRadioData = ({onChange}) => {
  const [dataValue, setDataValue] = useState("parametro");

  const ChangeRadio = (e) => {
    setDataValue(e.target.value);
    onChange(e.target.value)
  };

  return (
    <div className="radio-input">
      <label className="label">
        <p className="text">Data</p>
        <input
          type="radio"
          id="data"
          name="tipo"
          value="data"
          checked={dataValue === "data"}
          onChange={ChangeRadio}
        />
      </label>
      <label className="label">
        <p className="text">Parâmetro</p>
        <input
          type="radio"
          id="parametro"
          name="tipo"
          value="parametro"
          checked={dataValue === "parametro"}
          onChange={ChangeRadio}
        />
      </label>
    </div>
  );
};

export default BotaoRadioData;
