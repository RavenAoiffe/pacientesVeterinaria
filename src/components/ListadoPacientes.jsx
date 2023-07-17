import Pacientes from "./Pacientes";

const ListadoPacientes = ({ pacientes, setPaciente, paciente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
      {pacientes && pacientes.length ? 
      <>
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-indigo-600 font-bold text-xl mt-5 mb-10 text-center">
          Administra tus {''}
          <span>
            Pacientes y citas
          </span>
          </p>

            {pacientes.map((paciente) => (
                <Pacientes
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                />
              ))
            }
      </> : (
        <>
          <h2 className="font-black text-3xl text-center">Aún no hay pacientes</h2>
            <p className="text-indigo-600 font-bold text-xl mt-5 mb-10 text-center">
            Comienza a agregar {''}
            <span>
              pacientes y citas
            </span>
          </p>
        </>
      )}
    </div>
  )
}
export default ListadoPacientes;