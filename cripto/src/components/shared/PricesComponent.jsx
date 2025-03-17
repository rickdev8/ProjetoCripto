import './PricesComponent.css'
import React from "react";

const  PricesComponent = (props) => {
    return (
        <div className='component-main'>
            <div className='component-title'>
                <p>{props.title}</p>
                <p>{props.title2}</p>
            </div>
            <div className='component-price'>
                <h2>${props.price}</h2>
                <div className='variation'>
                <p>Variation: {props.variacao}</p>
                {props.icone}
                </div>
            </div>
        </div>
    )
}

export default PricesComponent