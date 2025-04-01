import React, { useState } from "react";
import './InputData.css'

const InputDataHora = ({ onChange }) => {

    const [valueData, setValueData] = useState('')

    const ChangeData = (e) => {
        setValueData(e.target.value)
        onChange(e.target.value)
    }

    return (
        <div className="input-data-hora">
            <label>Data</label>
            <input
            value={valueData}
                type="datetime-local"
                onChange={ChangeData}
            />
        </div>
    );
};

export default InputDataHora;
