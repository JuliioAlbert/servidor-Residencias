const { response, request, json } = require('express');
const Telefono = require('../models/Telefono');



const registrarTelefonos = async (req = request, res = response, next) => {
    const telefono = new Telefono(req.body);
    telefono.creador = req.usuario.id;
    try {
        await telefono.save();
        res.status(201).json({
            ok: true,
            telefono
        });
        return next();
    } catch (error) {
        res.status(401).json({
            ok: false,
            msj: "Error al Insertar Registro"
        })
    }
}

const editarTelefonos = async (req = request, res = response, next) => {

}

const eliminarTelefono = async (req = request, res = response, next) => {
    const { id } = (req.query);
    try {
        const telefono = await Telefono.findOneAndDelete(id);
        if (telefono) {
            res.status(201).json({
                ok: true,
                msj: 'Eliminado'
            });
        } else {
            res.status(400).json({
                ok: false,
                msj: "No se pudo eliminar"
            })
        }
        return next();
    } catch (error) {
        console.log(error);
        return status(501).json({
            ok: false,
            msj: "Error del Servidor"
        })
    }

}

const buscarTelefono = async (req = request, res = response, next) => {
    try {
        const telefonos = await Telefono.find({});
        res.status(200).json({
            ok: true,
            telefonos
        });
        return next();
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msj: "Error al Buscar Telefonos"
        });
        return next();
    }


}

module.exports = {
    registrarTelefonos,
    editarTelefonos,
    eliminarTelefono,
    buscarTelefono
}