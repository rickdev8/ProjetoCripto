import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importando o arquivo CSS

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <h1 className="logo">
          <img src="./logo/CRIPTO.png" alt="Logo" />
        </h1>

        {/* Menu de Navegação */}
        <ul className="nav-menu">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/sla">Documentação</Link>
          </li>
          <li>
            <Link to="/autor">Autor</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>

        {/* Botões */}
        <div className="buttons-navbar">
          <Link to='/login'>
            <button className="btn btn-primary">Entrar</button>
          </Link>
          <Link to='/cadastro'>
            <button className="btn btn-secondary">Cadastrar</button>
          </Link>
        </div>

        {/* Ícone de Menu para Mobile */}
        <button className="menu-icon">☰</button>
      </div>
    </nav>
  );
}

export default Navbar;
