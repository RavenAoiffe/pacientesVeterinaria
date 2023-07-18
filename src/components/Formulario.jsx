import {useState, useEffect} from 'react'; 
import Pacientes from './Pacientes';
import Error from './Error';

const Formulario =({pacientes,setPacientes, paciente})=> {
  
  //definir el estado del componente
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
      if(Object.keys(paciente).length > 0){
        setNombre(paciente.nombre);
        setPropietario(paciente.propietario);
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
      }
    },[
      paciente
  ])

  const generarId = () =>{
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }
  const handleSubmit = (e)=>{
    e.preventDefault();

    //validando formulario
    
    if([nombre, propietario, email, fecha, sintomas].includes('')){
       setError(true);
       return;
    }
    setError(false);
   //construir un objeto de paciente
   const objetoPaciente = {
    nombre, 
    propietario, 
    email, 
    fecha, 
    sintomas
    }

   if(paciente.id){
      // Editando el registro
      objetoPaciente.id = paciente.id;
      
      const pacientesActualizados = pacientes.map(pacienteState =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados)
      console.log('desde el if' + objetoPaciente.id)
   }  
   else{
    // nuevo registro*/
    objetoPaciente.id = generarId();
    setPacientes([...pacientes,objetoPaciente]);
    console.log('desde el else ' + objetoPaciente.id)

   }

    //Reiniciar el form
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');

  }
    return (
      <div className="md:w-1/2 lg:w-2/5 mx-5">
          <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
          <p className="mt-5 text-lg text-center">
            Añade pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
          </p>

          <form
            onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-5">
          
           {error && 
           <Error>Todos los campos son obligatorios</Error> 
           }    
            <div className="mb-5">
              <label htmlFor="nombreMascota" 
              className="block text-gray-700 font-bold uppercase">Nombre Mascota {nombre}</label>
              <input type="text" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              name="nombreMascota" id="nombreMascota" placeholder="Nombre de la mascota"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value)
              }}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="nombrePropietario" 
              className="block text-gray-700 font-bold uppercase">Nombre Propietario</label>
              <input type="text" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              name="nombrePropietario" id="nombrePropietario" placeholder="Nombre del propietario"
              value={propietario}
              onChange={(e) => {
                setPropietario(e.target.value)
              }}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" 
              className="block text-gray-700 font-bold uppercase">Email</label>
              <input type="email" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              name="email" id="email" placeholder="Correo electrónico"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="alta" 
              className="block text-gray-700 font-bold uppercase">Fecha de Alta</label>
              <input type="date" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              name="alta" id="alta"
              value={fecha}
              onChange={(e) => {
                setFecha(e.target.value)
              }}
              />
            </div>


            <div className="mb-5">
              <label htmlFor="alta" 
              className="block text-gray-700 font-bold uppercase">Síntomas</label>
            <textarea name="" id="sintomas" cols="30"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(e) => {
              setSintomas(e.target.value)
            }}
             rows="5"/>
            </div>

            <input type="submit" 
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 
            cursor-pointer transition-colors"
            value={paciente.id ? 'Editar paciente ': 'Agregar paciente'}
            />
          </form>
      </div>
    )
}
export default Formulario;