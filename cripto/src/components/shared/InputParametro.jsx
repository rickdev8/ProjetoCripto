import React, { useState } from "react";
import './InputParametro.css'

const InputParametro = ({onChange}) => {
    const [valorinput, setValorinput] = useState('')

    const ChangeInput = (e) => {
        setValorinput(e.target.value)
        onChange(e.target.value)
    }

    return (
        <div className="input-parametro">
            <label>Valor a ser escutado</label>
            <input type="number" onChange={ChangeInput} value={valorinput} required={true} placeholder="Digite o valor aqui" />
        </div>
    )
}

export default InputParametro