import React, { Component } from "react";

class App extends Component {
  // 1. Solamente puedo retornar un elemento en el return
  state ={
    nombre:"Jhan",
    contador:0
  }

  incrementar(){
    this.setState({
      contador: this.state.contador + 1
    })
  }

  render() {
    return (
      <main>
        <div>
          <h1>Hola React!</h1>
        </div>
        <p>{this.state.nombre}</p>
        <p>{100+ 540}</p>
        <p>Contador: {this.state.contador}</p>
        <button onClick={() => {this.incrementar()}}>Incrementar Contador</button>
      </main>
    );
  }
}

export default App;
