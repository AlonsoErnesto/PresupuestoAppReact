import React,{useState} from 'react'
import Error from "./Error"
import shortid from "shortid"
import PropTypes from "prop-types"

export default function Formulario(props) {

    const { setGasto,setCrearGasto } = props;

    const [nombre, setNombre] = useState("")
    const [precio, setPrecio] = useState(0)
    const [error, setError] = useState(false)

   const [messageError, setMessageError] = useState("")

    const agregarGasto = (e) => {
        e.preventDefault();
            
        if(!nombre || !precio)
        {
            setError(true);
            setMessageError("Complete los campos del formulario")
            return;
        }else if(precio <= 0)
        {
            setError(true)
            setMessageError("Ingrese mayor a $1.00 en el campo precio")
            return  
        }else {
            setError(false)
            //contruir el gasto
            const gasto = {
                nombre,
                precio:parseInt(precio), 
                id:shortid.generate()
            }
            
            //Pasadr gasto al componente principal
            setGasto(gasto);
            console.log(gasto)
            setCrearGasto(true);

            //valor por defesto a Inputs
            setNombre('');
            setPrecio(0)
        }
    }

    return (
        <form onSubmit={agregarGasto}>
            <h2>Agregar nuevo gasto</h2>
            {error ? (<Error messageError={messageError}/>) : null}
                <div className="campo">
                    <label>Nombre del Gasto</label>
                    <input
                        type="text"
                        className="u-full-width"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                    <label>Cantidad de Gasto</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="$1.00"
                        value={precio}
                        onChange={e=> parseInt(setPrecio(e.target.value),10)}
                    /> 
                    <input
                        type="submit"
                        className="button-primary u-full-width"
                        value="Agregar"
                    /> 
                </div>
            
        </form>
    )
}


Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto:PropTypes.func.isRequired
}

