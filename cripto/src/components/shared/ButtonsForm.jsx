import React from "react";
import "./ButtonsForm.css";

const ButtonsForm = (props) => {
  const Login = <p>{props.title}</p>;
  const Loading = (
    <svg className="loading" viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>
  );

  const verificar = props.loading === true ? Loading : Login;

  return (
    <button loading={props.loading} type="submit" className="form-button-login">
      {verificar}
    </button>
  );
};

export default ButtonsForm;
