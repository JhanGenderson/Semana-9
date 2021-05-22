import {useState} from 'react';
import Parrafo from './components/Parrafo'

const App = () => {
    // useState
    // const[miestado, funcEstado] = useState(estado_inicial)

    const [estado, setEstado] = useState(0)

    const incrementar= () =>{
        setEstado(estado + 1)
    }

    let miTexto = "The Trooper"

    return(
        <div>
            <h1>
                Hola React!! otra vez
            </h1>
            <p>
                Contador: {estado}
            </p>
            <button onClick={incrementar}>
                Incrementar
            </button>
            <hr />
            <Parrafo texto="Fear of the Dark..."></Parrafo>
            <Parrafo texto={miTexto} banda="Iron Maiden"/>
        </div>
    )
}

export default App;