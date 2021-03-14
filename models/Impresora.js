const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const impresoras = new Schema({
    modelo : {
        type: String,
    },
    Nserie : {
     type: String,
    },
    creador:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios',
        default: null
    },
    fecha: {
        type:Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Impresoras', impresoras);
