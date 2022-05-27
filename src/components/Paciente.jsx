

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente;
  
    
    const handleEliminar = () => {
        const respuesta = confirm('Desea eliminar el paciente de la lista?')
        if (respuesta) {
            eliminarPaciente(id)
        }
    }

    return (

        <div
            className="mx-5 mb-10 bg-white shadow-md px-5 py-10 rounded-md"
        >
            {/*  */}
            <p
                className="font-bold mb-3 text-gray-700 uppercase"
            >
                Nombre: {''}

                <span
                    className="font-normal normal-case"
                >
                    {nombre}
                </span>
            </p>

            <p
                className="font-bold mb-3 text-gray-700 uppercase"
            >
                Propietario: {''}
                <span
                    className="font-normal normal-case"
                >
                    {propietario}
                </span>
            </p>

            <p
                className="font-bold mb-3 text-gray-700 uppercase"
            >
                Email: {''}
            <span
                className="font-normal normal-case"
            >
                {email}
            </span>
            </p>

            <p
                className="font-bold mb-3 text-gray-700 uppercase"
            >
                Fecha Alta: {''}
                <span
                    className="font-normal normal-case"
                >
                    {fecha}
                </span>
            </p>
            <p
                className="font-bold mb-3 text-gray-700 uppercase"
            >
                Sintomas: {''}
                <span
                    className="font-normal normal-case"
                >
                    {sintomas}
                </span>
            </p>
            {/*  */}

            <div>
                <button
                    type='button'
                    onClick={() => setPaciente(paciente)}
                    className="py-2 px-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md mr-5 mt-3 uppercase transition-all"
                >
                    Editar
                </button>
                <button
                    type='button'
                    onClick={handleEliminar}
                    className="py-2 px-10 bg-red-700 hover:bg-red-800 text-white font-bold rounded-md mt-3 uppercase transition-all"
                >
                    Eliminar
                </button>
            </div>
        </div>

  )
}

export default Paciente
