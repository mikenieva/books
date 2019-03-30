import React, { Component } from 'react';
import axios from 'axios'

class Libro extends Component {

    state = {
        libro: []
    }

    componentDidMount(){
        const id = this.props.match.params.idLibro
        axios.get(`http://localhost:3002/libros/${id}`).then(dato => {
            this.setState({
                libro: dato.data
            })
        })

    }

    render() {
        return (
            <div>
                {this.state.libro.map((libro, key) => {
                    return (
                        <div key={key}>
                            Nombre del libro: <h1>{libro.titulo}</h1>
                            Páginas: <p>{libro.paginas}</p>
                            Descripción: <p>{libro.descripcion}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Libro;