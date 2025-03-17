import "./Moedaindividual.css";
import React, { useEffect, useState } from "react";

const Moedaindividual = (props) => {
  return (
    <div className="container-moedaind">
      <div className="perfil-div-start">
        <div className="perfil-div-img">
            <img src={props.imgUrl}></img>
        </div>
        <div className="perfil-div-titles">
          <h4>{props.name}</h4>
          <p>{props.value}</p>
        </div>
      </div>
      <div className="perfil-div">
        <p>${props.pricepassado}</p>
      </div>
      <div className="perfil-div">
        <p>{props.porcentagem}%</p>
      </div>
      <div className="perfil-div">
        <p>${props.valoratual}</p>
      </div>
      <div className="perfil-div">
        <p style={props.style}>{props.state}</p>
      </div>
      <div className="perfil-div">
        <p>{props.data}</p>
      </div>
      <div className="perfil-div">{props.icone}</div>
    </div>
  );
};

export default Moedaindividual;
