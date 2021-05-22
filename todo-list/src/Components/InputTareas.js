import React, {useState} from 'react'

export default function InputTareas({tarea, manejarTarea, anadirTarea}) {

    // Componentes Controlados
    // Todo Input debe estar amarrado a un estado

    // const [input, setInput] = useState('Hola')
    return (

        <div>
            <input type="text" placeholder="Ingrese una nueva tarea"
            value={tarea}
            onChange={(e)=>{manejarTarea(e.target.value)}}
            className="form-control"/>
            <button onClick={anadirTarea} className="btn btn-primary mt-2">
                Agregar Tarea
            </button>
        </div>
    )
}
