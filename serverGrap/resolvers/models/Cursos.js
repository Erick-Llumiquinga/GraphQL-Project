;
'use strict'

const mongoose = require('mongoose'),
    { Schema } = mongoose,

    CursoModel = new Schema({
        titulo: { type: String },
        profesor: { type: String },
        descripcion: { type: String },
        genero: { type: String },
        // asistentes: { type: Array }
    });

module.exports = mongoose.model('Cursos', CursoModel, 'cursos')