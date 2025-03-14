import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, matchPath } from "react-router-dom";
import Navbar from "./components/homescreen/navbar/Navbar";
import Cadastro from "./components/cadastro/Cadastro";
import Documentation from "./pages/documentationPage/Documentation";
import Homescreen from "./pages/homescreenpage/Homescreen";
import Autor from "./pages/autorpage/Autor";
import Login from "./components/login/Login";
import UserMain from "./pages/private/UserMain";

function Layout() {
  const location = useLocation();

  // Rotas que não devem exibir a Navbar
  const hideNavbarRoutes = ["/login", "/cadastro", "/main/:id"];
  const shouldShowNavbar = !hideNavbarRoutes.some((e) => matchPath(e, location.pathname))
  console.log(shouldShowNavbar)

  console.log(matchPath('/main/:id', location.pathname))

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/main/:id" element={<UserMain />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/autor" element={<Autor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
