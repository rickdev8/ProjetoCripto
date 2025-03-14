import './input.css'
import React, { useState } from "react";

const Input = (props) => {

  return (
    <div className="input-group">
      <input
        value={props.value}
        disabled={props.disabled}
        className='input'
        type={props.type}
        id={props.id}
        name="name"
        required
        onChange={props.handleChange}
      />
      <label className="user-label" htmlFor="nome">{props.placeholder}</label>
    </div>
    
  );
};

export default Input;
