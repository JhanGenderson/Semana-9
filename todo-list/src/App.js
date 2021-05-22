import React, {useState} from 'react'
import InputTareas from "./Components/InputTareas"
import ListaTarea from "./Components/ListaTarea"

export default function App() {
  const[tareas, setTareas] = useState([])

  const[tarea, setTarea] = useState("")

  const anadirTarea = (nuevaTarea) => {
    setTareas()
  }

  const manejarTarea = (tarea) => {
    setTarea(tarea)
  }

  return (
    <div>
      <h1>Todo - List</h1>
      <InputTareas tarea={tarea} manejarTarea={manejarTarea}/>
      <ListaTarea/>
    </div>
  )
}

