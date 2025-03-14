import React from "react";
import "./Header.css";
import Card from "../../shared/card";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Coluna esquerda */}
        <div className="left-column">
          <Card />
          <h2 className="title">Monitoramento Inteligente de Criptomoedas</h2>
          <p className="description">
            Acompanhe o mercado de criptomoedas em tempo real e nunca perca uma oportunidade.
            Defina alertas personalizados e receba notificações automáticas sempre que uma moeda atingir o valor desejado.
            A tecnologia que você precisa para se manter à frente no mercado de cripto!
          </p>
          <div className="buttons-header">
            <button className="cta-button">Comece Agora</button>
            <button className="cta-button2">Fale com o suporte</button>
          </div>
        </div>

        {/* Coluna direita */}
        <div className="right-column">
          <img src="./imgheader/hero_img.svg" alt="Imagem do monitoramento" className="header-image" />
        </div>    
      </div>
    </header>
  );
}

export default Header;
