import React from 'react'
import { revisarPresupuesto } from '../helpers';
import PropTypes from "prop-types"


export default function ControlPresupuesto(props) {

    const { presupuesto, restante } = props;



    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto,restante)}>
                Restante: $ {restante}
            </div>
        </>
    )
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante:PropTypes.number.isRequired,
}