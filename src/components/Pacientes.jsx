const Pacientes = ({paciente, setPaciente}) => {

  const {nombre}= paciente;
  const {propietario}= paciente;
  const {email}= paciente;
  const {fecha}= paciente;
  const {sintomas}= paciente;

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="mb-3 font-bold text-gray-700 uppercase">Nombre:{' '}
        <span className="font-normal normalcase">{nombre}</span>
        </p>

        <p className="mb-3 font-bold text-gray-700 uppercase">Propietario:{' '}
        <span className="font-normal normalcase">{propietario}</span>
        </p>

        <p className="mb-3 font-bold text-gray-700 uppercase">Email:{' '}
        <span className="font-normal normalcase">{email}</span>
        </p>

        <p className="mb-3 font-bold text-gray-700 uppercase">Fecha de Alta:{' '}
        <span className="font-normal normalcase">{fecha}</span>
        </p>

        <p className="mb-3 font-bold text-gray-700 uppercase">Síntomas:{' '}
        <span className="font-normal normalcase">{sintomas}</span>
        </p>
        
        <div className="flex justify-between mt-10">
          <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase  rounded"
          type="button"
          onClick={() => setPaciente(paciente)}
          >Editar</button>

          <button className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase  rounded"
          type="button">Eliminar</button>
        </div>
    </div>
  )
}

export default Pacientes
