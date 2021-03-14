const express = require('express');
const router = express.Router();
const { check } = require('express-validator');


const { autenticarUsuario, usuarioAuth } = require('../controller/authController');
const { validarCampos } = require('../middlewares/validarCampos');
const { validarJWT } = require('../middlewares/validarJWT');

// api/auth
router.post('/',
    [
        check('email', 'El email es Obligatorio').isEmail(),
        check('password', 'El password es Obligatorio').not().isEmpty(),

    ],
    validarCampos,
    autenticarUsuario);

router.get('/', validarJWT, usuarioAuth);


module.exports = router;