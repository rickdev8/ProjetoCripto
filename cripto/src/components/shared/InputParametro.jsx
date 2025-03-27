import React from "react";
import './InputParametro.css'

const InputParametro = () => {
    return (
        <div className="input-parametro">
            <label>Valor a ser esxutado</label>
            <input type="number" resource={true} placeholder="Digite o valor aqui" />
        </div>
    )
}

export default InputParametro