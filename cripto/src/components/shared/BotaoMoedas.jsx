import React from 'react';
import './BotaoMoedas.css'


const BotaoMoedas = (props) => {
  return (
    <div className="botao">
      <select onChange={props.onChange}>
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="xrp">Xrp</option>
        <option value="bnb">Bnb</option>
        <option value="solana">Solana</option>
        <option value="usdc">usdc</option>
        <option value="cardano">cardano</option>
        <option value="dogecoin">dogecoin</option>
        <option value="tron">tron</option>
        <option value="toncoin">toncoin</option>
      </select>
    </div>
  );
};


export default BotaoMoedas