const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const telefonoSchema= new Schema({
    marca:{
        type:String,
        required:true,
    },
    modelo:{
        type:String,
        required:true,
    },
    creador:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios',
        default: null
    },
    color:{
        type: String,
        default:'Gris'
    },
    linea:{
        type: String,
        enum : ['telcel','at&t','diri'],
        default: 'at&t'
    },
    registro: {
        type:Date,
        default:  Date.now()
    }
});

module.exports = mongoose.model('Telefonos', telefonoSchema);