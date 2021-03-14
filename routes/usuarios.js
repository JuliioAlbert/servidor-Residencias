const express = require('express');
const router = express.Router();
const { nuevoUsuario } = require('../controller/usuarios_controller');
const { check } = require('express-validator');
const {validarCampos} = require('../middlewares/validarCampos');

router.post('/',[
    check('nombre', 'El nombre es Obligatorio').not().isEmpty(),
    check('email', 'El email es Obligatorio').isEmail(),
    check('password', 'El password es Obligatorio').not().isEmpty(),
],validarCampos, nuevoUsuario);

module.exports = router;