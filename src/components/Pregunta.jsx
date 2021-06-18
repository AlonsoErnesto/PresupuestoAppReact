import React,{useState} from 'react'
import Error from "./Error"
import PropTypes from "prop-types"


const Pregunta = (props) => {

    const { setpresupuesto,setRestante } = props;

    const [cantidad, setCantidad] = useState(0)
    const [validaPreupuesto, setValidaPreupuesto] = useState(false)
    const [messageError, setMessageError] = useState("")
    //function captura el dato
    const definirPresupuesto = (e) => {
        setCantidad(parseInt(e.target.value,10))
    }
    //submit
    const agregarPresupuesto= (e)=>{
        e.preventDefault();

    //validar
        if( cantidad === 0)
        {
            setMessageError("la cantidad debe de ser mayor a 0")
            setValidaPreupuesto(true);
            return ;
        }else if(!cantidad)
        {
            setValidaPreupuesto(true)
            setMessageError("Ingrese una cantidad")
            return;
        }else if(cantidad < 0)
        {
            setValidaPreupuesto(true);
            setMessageError("La cantidad debe de ser numeros positivo")
        }else{
            setValidaPreupuesto(false);
            setpresupuesto(cantidad);
            setRestante(cantidad);
        }

    }

    return ( 
        <>
            <h2>Ingrese su presupuesto total</h2>
            {validaPreupuesto ? (<Error messageError={messageError}/>) : null}
            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Cantidad total del presupuesto."
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Desfinir presupuesto"
                />
            </form>
        </>
     );
}
 
Pregunta.propTypes = {
    setpresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired
}



export default Pregunta;