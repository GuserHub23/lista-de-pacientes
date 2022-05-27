import { useState, useEffect } from "react"
import ErrorFormulario from "./ErrorFormulario"
import { v4 as uuidv4 } from 'uuid'


const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [ nombre, setNombre ] = useState('')
    const [ propietario, setPropietario ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ fecha, setFecha ] = useState('')
    const [ sintomas, setSintomas ] = useState('')

    const [ error, setError ] = useState(false)

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const handleSubmit = (e) => {
        e.preventDefault()

        //VALIDACION DEL FORMULARIO
        if([ nombre, propietario, email, fecha, sintomas ].includes('')) {
            setError(true)
            return;
        }
        setError(false)
        // OBJ DE PACIENTES
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        }

        if(paciente.id) {
            //EDITANDO REGISTRO
            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map( pacienteState => 
                pacienteState.id === paciente.id ? objetoPaciente : pacienteState
            )

            setPacientes(pacientesActualizados)
            setPaciente({})
        } else {
            //NUEVO REGISTRO
            // SUMA UN PACIENTE AL ARREGLO DE PACIENTES
            objetoPaciente.id = uuidv4()
            setPacientes([...pacientes, objetoPaciente])
        }

        // REINICIA EL FORMULARIO
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    // useEffect()


    return (
        <div 
            className="md:w-1/2 lg:w-2/5 mx-5"
        >
            <h2
                className="font-black text-3xl text-center text-slate-200"
            >
                Formulario
            </h2>

            <p
                className="text-lg mt-5 text-center text-slate-200"
            >
                Añadir Pacientes y {''}
                <span
                    className="text-emerald-500 font-bold"
                >
                    Administrarlos
                </span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-md py-10 px-5 mt-10 mb-10"
            >
                
                { error && <ErrorFormulario/> }
                
                <div>
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="mascota"
                    >
                        Nombre de la Mascota
                    </label>
                    <input 
                        autoFocus
                        id="mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-lg bg-gray-100"
                        type="text" 
                        placeholder="Nombre de la Mascota"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div 
                    className="mt-10"
                >
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="propietario"
                    >
                        Nombre del Propietario
                    </label>
                    <input 
                        id="propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-lg bg-gray-100"
                        type="text" 
                        placeholder="Nombre del Propietario"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div 
                    className="mt-10"
                >
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="email"
                    >
                        Email de Contacto
                    </label>
                    <input 
                        id="email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-lg bg-gray-100"
                        type="email" 
                        placeholder="ejemplo@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div 
                    className="mt-10"
                >
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="alta"
                    >
                        Alta
                    </label>
                    <input 
                        id="alta"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-lg bg-gray-100"
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div 
                    className="mt-10"
                >
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="sintomas"
                    >
                        Sintomas
                    </label>

                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-lg bg-gray-100"
                        placeholder="Describa los sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>
                
                <input
                    className="bg-emerald-600 w-full p-3 rounded-lg mt-5 text-white uppercase font-bold hover:bg-emerald-700 cursor-pointer transition-all"
                    type="submit"
                    value={ paciente.id ? 'Editar paciente' : 'Agregar paciente'}
                />

            </form>
        </div>
  )
}

export default Formulario
