import React, { useEffect, useState } from "react";
import "./Cadastro.css";
import Input from "../shared/Input";
import { Link } from "react-router-dom";
import {  postUser } from "../../services/Rotas";
import { ValidaDados, VerificaSenha } from "../../utils/functions";
import ButtonsForm from "../shared/buttonsForm";

function Cadastro() {
  const [verificaSenha, setVerificasenha] = useState('')
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
 
      if (ValidaDados(formData) && VerificaSenha(verificaSenha, formData.password)) {
        await postUser(formData);
      } else {
        console.log("Erro ao cadastrar usuário");
      }
    } 


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="container-main">
      <div className="form-container">
        <div className="form-cadastro">
          <div className="title">
            <h2>Criar conta na Crypto</h2>
            <p>
              Informe todos os dados solicitados abaixo, certifique-se de que
              todos os dados inseridos estejam corretos.
            </p>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <Input
              type="text"
              handleChange={handleChange}
              id="name"
              value={formData.name}
              placeholder="Nome Completo *"
              name="name"
            />
            <Input
              type="email"
              handleChange={handleChange}
              id="email"
              value={formData.email}
              placeholder="Email *"
            />
            <Input
              type="number"
              handleChange={handleChange}
              id="age"
              value={formData.number}
              placeholder="Idade *"
            />
            <Input
              type="password"
              handleChange={handleChange}
              id="password"
              value={formData.password}
              placeholder="Senha *"
            />
            <Input
              type="password"
              handleChange={(e) => setVerificasenha(e.target.value)}
              id="password_confirm"
              value={verificaSenha}
              placeholder="Repetir Senha *"
            />
            <div className="buttons">
              <ButtonsForm title={"Cadastrar"} />
              <Link to="/">
                <button type="button" className="form-button-voltar">
                  Voltar
                </button>
              </Link>
            </div>
          </form>
          <div className="container-termos">
            <p>
              Ao se registrar, você estará concordando com os Termos de Uso e
              Termos e Privacidade.
            </p>
          </div>
        </div>
      </div>
      <div className="container-img">
        <img src="./loginimg/imglogin.png"></img>
      </div>
    </div>
  );
}

export default Cadastro;
