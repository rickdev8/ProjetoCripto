import React, { useEffect, useState } from "react";
import "./Login.css";
import Input from "../shared/Input";
import { Link } from "react-router-dom";
import { getLogin, LogarUser } from "../../services/Rotas";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate()

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await getLogin(userLogin);
    if(response.status === 200){
      const response2 = await LogarUser(userLogin)
      if(response2.data.Acesso === 'Autenticado'){
        navigate(`/main/${response2.data.user.email}`)
        console.log("Acesso liberado")
      } else {
        console.log("Acesso negado")
      }
    } else {
      console.log("Ocorreu um erro inesperado!")
    }
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

              handleChange={(e) =>
                setUserLogin({ ...userLogin, email: e.target.value })
              }
              type="email"
              id="email"
              value={userLogin.email}
              placeholder="Email *"
            />
            <Input

              handleChange={(e) =>
                setUserLogin({ ...userLogin, password: e.target.value })
              }
              type="password"
              id="password"
              value={userLogin.password}
              placeholder="Senha *"
            />
            <div className="buttons">
                <button type="submit" className="form-button-login">
                  Login
                </button>

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
        <img src="./loginimg/imglogin.png" alt="Login Illustration" />
      </div>
    </div>
  );
}

export default Login;
