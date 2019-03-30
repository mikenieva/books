// 1. IMPORTACIONES
const express   = require('express')
const mongoose  = require('mongoose')
const cors      = require('cors')

const app = express()

// 2. MIDDLEWARES - CADENEROS
// a. Express
app.use(express.json())
app.use(cors())

// b. Mongo
mongoose.connect("mongodb://localhost:27017/biblioteca")

// 3. MODELOS
const { Libro } = require('./models/libro')


// 4. RUTAS
// http://localhost:3002/librosdeprogramacion
app.get("/librosdeprogramacion", (req, res) => {
    Libro.find({}).then(datosdelibros => {
        res.send(datosdelibros)
    })
    
})

app.get("/libros/:idLibro", (req, res) => {
    // Constante
    const libroABuscar = req.params.idLibro

    Libro.find({idLibro: libroABuscar}).then(libro => {
        res.send(libro)
    })
})


// 5. LISTENERS
app.listen(3002, () => {
    console.log("Servidor corriendo en puerto 3002")
})