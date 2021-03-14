const { response, request } = require('express');
require('dotenv').config({path:'variables.env'});
const jwt = require('jsonwebtoken');


const validarJWT = (req=request, res=response, next) => {
    const authHeader = req.get('Authorization');
    if (authHeader) {
        'Obtener Token';
        const token = authHeader.split(' ')[1];
        
        try {
            const usuario = jwt.verify(token, process.env.SECRETA);
            req.usuario = usuario;
        } catch (error) {
            console.log(error);
        }
        
    }

    return next();
}


module.exports= {
    validarJWT
}