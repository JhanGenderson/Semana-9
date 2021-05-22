import React, {useState} from 'react'

export default function InputTareas(tarea, manejarTarea) {

    // Componentes Controlados
    // Todo Input debe estar amarrado a un estado

    const [input, setInput] = useState('Hola')
    return (
        <div>
            <input type="text" placeholder="Ingrese una nueva tarea"
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
            />
            <button>
                Agregar Tarea
            </button>
        </div>
    )
}
