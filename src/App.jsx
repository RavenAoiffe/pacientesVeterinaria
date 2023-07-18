import {useState, useEffect} from 'react'; 
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

 const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];

  const [pacientes, setPacientes ] = useState(INITIAL);

  const [paciente, setPaciente] = useState({});

  //Use effect localStorage
  useEffect(() =>{
      localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])


  const eliminarPaciente = id =>{
    //console.log('eliminando paciente' + id)
    const pacientesActualidados = pacientes.filter(paciente => paciente.id !== id);

    setPacientes(pacientesActualidados)
  }


  return (
    <div className="container mx-auto mt-20">
        <Header />
        
        <div className="mt-12 md:flex">
            <Formulario 
              pacientes ={pacientes}
              setPacientes ={setPacientes}
              paciente={paciente}
              setPaciente = {setPaciente}
            />
            <ListadoPacientes 
              pacientes ={pacientes}
              setPaciente ={setPaciente}
              paciente={paciente}
              eliminarPaciente = {eliminarPaciente}
            />
        </div>

    </div>
  )
}

export default App
