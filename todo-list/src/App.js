import React, {useState, useEffect} from 'react'
import InputTareas from "./Components/InputTareas"
import ListaTarea from "./Components/ListaTarea"

export default function App() {
  const[tareas, setTareas] = useState([])

  const[tarea, setTarea] = useState("Hola")

  const anadirTarea = () => {
    setTareas([...tareas, tarea])
  }

  const manejarTarea = (tarea) => {
    setTarea(tarea)
  }

  useEffect(() => {
    setTarea("")
  },[tareas])

  // Ejercicio

  const deleteTarea = (indice) =>{
    // obtengo los items de tarea por desestructuracion
    let tareasTmp = [...tareas]
    // elimino 1 item a partir del indice que reciba
    tareasTmp.splice(indice,1)
    console.log(tareasTmp)
    // actualizo el estado, con el arreglo modificado
   setTareas([...tareasTmp])
  }
  console.log(tareas)

  return (
    <div className="container">
      <h1>Todo - List</h1>
      Tarea: {tarea}
      <InputTareas 
        tarea={tarea} 
        manejarTarea={manejarTarea}
        anadirTarea={anadirTarea}/>
      <ListaTarea 
        tareas={tareas}
        deleteTarea={deleteTarea}/>
    </div>
  )
}

