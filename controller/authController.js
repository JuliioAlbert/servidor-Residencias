const { response } = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env' });

const Usuario = require('../models/Usuarios');



const autenticarUsuario = async (req, res = response, next) => {
    //Revisar si hay errores 


    //Buscar el usuario si esta registrado
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
        res.status(401).json({
            ok: false,
            msj: 'El Usuario no Existe'
        });
        return next();
    }

    //Si existe Usuario;
    if (bcrypt.compareSync(password, usuario.password)) {
        //Crear JWT 
        const token = jwt.sign({
            id: usuario._id,
            nombre: usuario.nombre,
        }, process.env.SECRETA, { expiresIn: '24hr' });

        res.json({ token });


    } else {
        res.status(401).json({
            ok: false,
            msj: 'Password Incorrecto'
        })

    }
}




const usuarioAuth = async (req, res = response, next) => {
    res.status(200).json({usuario: req.usuario});
}

module.exports = {
    autenticarUsuario,
    usuarioAuth
}