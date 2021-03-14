const express = require('express');
const router = express.Router();
const { check } = require('express-validator');


const {registrarTelefonos } = require('../controller/telefonosController');
const { validarCampos } = require('../middlewares/validarCampos');
const { validarJWT } = require('../middlewares/validarJWT');

// api/telefonos

router.post('/', [
    check('marca', 'Es Obligatorio').not().isEmpty(),
    check('modelo', 'Es Obligatorio').not().isEmpty(),
    validarCampos
], validarJWT,registrarTelefonos);




module.exports = router;
