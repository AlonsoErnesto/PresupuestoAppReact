import React from 'react'
import PropTypes from "prop-types"

export default function Gasto(props) {

    const {gasto} = props;

    return (
        <li className="gastos">
            
            <p>
                {gasto.nombre}
                <span className="gasto">$ {gasto.precio}</span>    
            </p>
        </li>
    )
}



Gasto.propTypes = {
    gasto:PropTypes.object.isRequired
}