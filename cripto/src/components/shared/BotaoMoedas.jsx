import React from 'react';
import './BotaoMoedas.css'

const BotaoMoedas = (props) => {
  return (
    <div className="botao">
      <select onChange={props.onChange}>
        <option data-name="BTC" value="bitcoin">Bitcoin</option>
        <option data-name="ETH" value="ethereum">Ethereum</option>
        <option data-name="XRP" value="xrp">Xrp</option>
        <option data-name="LTC" value="litecoin">Litecoin</option> {/* Troquei BNB por Litecoin */}
        <option data-name="SOL" value="solana">Solana</option>
        <option data-name="DOT" value="polkadot">Polkadot</option> {/* Troquei USDC por Polkadot */}
        <option data-name="ADA" value="cardano">Cardano</option>
        <option data-name="DOGE" value="dogecoin">Dogecoin</option>
        <option data-name="AVAX" value="avalanche">Avalanche</option> {/* Troquei TRON por Avalanche */}
        <option data-name="LINK" value="chainlink">Chainlink</option> {/* Troquei Toncoin por Chainlink */}
      </select>
    </div>
  );
};

export default BotaoMoedas;
