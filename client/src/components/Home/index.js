// 1. IMPORTACIONES
import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

// 2. COMPONENTE
// a. Componentes de Función
// b. Componentes de Clase (Inteligentes)
class Home extends Component {

  state = {
    libros: []
  }

  componentDidMount(){
    axios.get("http://localhost:3002/librosdeprogramacion").then(datosconseguidos => {
      this.setState({
        libros: datosconseguidos.data
      })
    })
  }

  render() {
    console.log("Hola Mike")
    return (
      <div className="App">
        {this.state.libros.map((libro, key) => {
          return (
            <div>
              <Link to={libro.idLibro}>
                {libro.titulo}
              </Link>
            </div>
          )
        })
      }
      </div>
    );
  }
}

// 3. EXPORTACIÓN
export default Home;
