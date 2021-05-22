import React from 'react'

export default function ListaTarea({tareas, deleteTarea}) {
    // console.log("misTareas", tareas)
    return (
        <ul className="list-group mt-4">  
            {tareas.map((item, indice) => (
        // este key tiene que ser único
        <li key={indice} className="list-group-item">
          {item}
          <button className="btn btn-danger btn-sm ms-2" onClick={()=>{deleteTarea(indice)}}>X</button>
        </li>
        
      ))}
        </ul>
    )
}
