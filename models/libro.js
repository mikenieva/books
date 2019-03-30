// 1. IMPORTACIONES
const mongoose = require('mongoose')

// 2. SCHEMA
const libroSchema = mongoose.Schema({
    idLibro: {
        type: String
    },
    titulo: {
        type: String
    },
    paginas: {
        type: Number
    },
    descripcion: {
        type: String
    }
})


// 3. MODELO
// mongoose.model(el nombre en singular, el schema, la colección de la BD)
const Libro = mongoose.model("Libro",libroSchema, "librosdeprogramacion")

// 4. EXPORTACIÓN
module.exports = { Libro }