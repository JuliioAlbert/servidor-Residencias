const { response } = require('express');
const Usuario = require('../models/Usuarios');
const bcrypt = require('bcrypt');


const nuevoUsuario = async (req, res=response) => {

    //Verificar si el usuario ya estuvo regristrado 

    const { email, password } = req.body;

    let usuario = await Usuario.findOne({ email });

    if (usuario) {
        return res.status(400).json({
            ok: true,
            msj: "Usuario ya existe"
        })
    }

    //Crear un nuevo Usuario
    usuario = new Usuario(req.body);

    //Hasherar el password
    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(password, salt);
    try {
        await usuario.save();
        res.json({
            msj: 'ok',
            usuario
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    nuevoUsuario
}