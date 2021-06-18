import React,{useState, useEffect} from 'react';
import Pregunta from "./components/Pregunta.jsx"
import Formulario from "./components/Formulario"
import Listado from "./components/Listado"
import ControlPresupuesto from "./components/ControlPresupuesto"



function App() {

  const [presupuesto, setpresupuesto] = useState(0);
  const [restante, setRestante] = useState(0)
  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState({})

  const [crearGasto, setCrearGasto] = useState(false)
  
  // Efeto para actualizar el restante
  useEffect(() => {
    
    if(crearGasto)
    {
      //agrega nuevo presupuesto
      
      setGastos([
        ...gastos,
        gasto
      ]);
      // resta del presupuesto actuall
      const presupuestoRestante = restante - gasto.precio;
      setRestante(presupuestoRestante)
      setCrearGasto(false)
    }
  }, [gasto,crearGasto,gastos,restante])


  return (
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>

          <div className="contenido-principal contenido">
            
            {!presupuesto 
              ? <Pregunta setpresupuesto={setpresupuesto} setRestante={setRestante}/>
              : <ListaFormulario 
                  setCrearGasto={setCrearGasto}
                  setGasto={setGasto}  
                  gastos={gastos}
                  presupuesto={presupuesto}
                  restante = {restante} /> 
            }
          </div>
        </header>
      </div>
  );

}



function ListaFormulario(props){

  const { setGasto,gastos,presupuesto,restante,setCrearGasto } = props;

  return(
    <div className="row">
            <div className="one-half column">
                <Formulario setGasto={setGasto} setCrearGasto={setCrearGasto}/>
            </div>
            <div className="one-half column">
                <Listado
                  gastos={gastos}
                 
                />

                <ControlPresupuesto
                     presupuesto={presupuesto}
                     restante = {restante}
                />
            </div>
          </div>
  )
}

export default App;
