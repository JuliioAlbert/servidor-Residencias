const express = require('express');
const conectarDB = require('./config/db');
//Crear Servicor 

const app = express();

//Conectar a la base de Datos;
conectarDB();

//Puerto de la app
const port = process.env.PORT || 4000;

//Habilitar los valores de un Body
app.use(express.json())


//Rutas de la app
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/telefono', require('./routes/telefonos'));
app.use('/api/imp', require('./routes/impresoras'));



//Arrancar la app 

app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor corre sobre el puerto ${port}`);
} )