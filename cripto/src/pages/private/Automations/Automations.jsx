import React, { useState } from "react";
import "./Automations.css";
import Menu from "../../../components/shared/Menu";
import Notify from "../../../components/shared/Notify";

const Automations = () => {
    const [addnotify, setAddnotify] = useState(false)
    const [notify, setNotify] = useState('')

    const btnfechar = () => {
        setAddnotify('')
        addnotify(false)
    }

    const AddNotify = () => {
        setAddnotify(true)
        setNotify(<Notify btnfechar={btnfechar} />)
    }
  return (
    <div className="automations-main">
      <div className="menu">
        <Menu />
      </div>
      <div className="container-automations">
        <div className="title-automations">
          <h1>Automations</h1>
        </div>

            <button onClick={AddNotify} className="add-automation">
                <p>Add new automation</p>
                <img src="/imgcriptos/icons8-adicionar-50.png"></img>
            </button>
        <div className="container-notify">
            {notify}
        </div>
      </div>
    </div>
  );
};

export default Automations;
