import { useEffect } from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  useEffect(() => {
    if(pacientes.length > 0) {

      console.log('nuevo paciente')
    }
  }, [pacientes])

  
  return (
    <div className="md:w-1/2 lg:w-3/5 mx-5">
      {pacientes && pacientes.length ? (
        <>
          <h2
              className="font-black text-3xl text-center text-slate-200"
          >
              Listado de pacientes
          </h2>

          <p
            className="text-lg mt-5 mb-10 text-center text-slate-200"
          >
              Administra tus {''}
            <span 
              className="text-emerald-500 font-bold"
            >
              Pacientes y Citas
            </span>
          </p>
        </>
      ) : (
        <>
          <h2
              className="font-black text-3xl text-center text-slate-200"
          >
              No hay pacientes
          </h2>

          <p
            className="text-lg mt-5 mb-10 text-center text-slate-200"
          >
              Comienza agregando pacientes y {''}
            <span 
              className="text-emerald-500 font-bold"
            >
              apareceran en éste lugar
            </span>
          </p>
        </>
      )}

        <div
          className={pacientes.length <= 2 ? 'overflow-y-hidden' : 'md:h-screen overflow-y-scroll'}
        >
          { pacientes.map( paciente => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))
          }
        </div>

    </div>
  )
}

export default ListadoPacientes
