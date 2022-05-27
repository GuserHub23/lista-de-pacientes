import { useState, useEffect } from "react"

import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

const App = () => {

  const [ pacientes, setPacientes ] = useState([])

  const [ paciente, setPaciente ] = useState({})

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    }

    obtenerLS();
  }, []);
  
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])


  const eliminarPaciente = (id) => {
    setPacientes(pacientes.filter(item => item.id !== id ? item : ''))
  }

  console.log(paciente)
  return (
    <div className="bg-gray-700 min-h-full">
      <div 
        className="container mx-auto pt-20"
      >
        <Header />
        <div
          className="mt-12 md:flex justify-center md:w-4/5 mx-auto"
        >
          <Formulario 
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        </div>
      </div>
    </div>
  )
}

export default App

