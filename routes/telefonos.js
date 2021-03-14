const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validarCampos');
const { validarJWT } = require('../middlewares/validarJWT');
const {
         registrarTelefonos,
         buscarTelefono, 
         eliminarTelefono } = require('../controller/telefonosController');

// api/telefonos

router.post('/', [
    check('marca', 'Es Obligatorio').not().isEmpty(),
    check('modelo', 'Es Obligatorio').not().isEmpty(),
    validarCampos
], validarJWT,registrarTelefonos);


router.get('/', validarJWT,  buscarTelefono);

router.delete('/',  validarJWT, eliminarTelefono);




module.exports = router;
