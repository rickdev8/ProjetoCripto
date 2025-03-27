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
import Automations from "./pages/private/Automations/Automations";
import Menu from "./components/shared/Menu";

function Layout() {
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/cadastro", "/main/automations", "/main/:id/states"];
  const shouldShowNavbar = !hideNavbarRoutes.some((e) => matchPath(e, location.pathname))

  const hideMenuRoutes = ["/login", "/","/main/:id/states", "/main/automations", "/cadastro"]
  const shouldShowMenu = !hideMenuRoutes.some((e) => matchPath(e, location.pathname))

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {shouldShowMenu && <Menu />}
      <Routes>
        <Route path="/main/automations" element={<Automations />} />
        <Route path="/" element={<Homescreen />} />
        <Route path="/main/:id/states" element={<UserMain />} />
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
