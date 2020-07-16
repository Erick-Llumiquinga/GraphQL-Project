;
'use strict'

let Estudiante = require('../models/Estudiantes');
let { ObjectID } = require('mongodb')


let getEstudiantes = async() => {
        let estudiantes;
        try {
            estudiantes = await Estudiante.find()
        } catch (err) {
            console.error(err)
        }
        return estudiantes;
    },

    getEstudiante = async(root, { id }) => {
        let estudiante
        try {
            estudiante = await Estudiante.find({ _id: ObjectID(id) })
        } catch (err) {
            console.error(err)
        }
        return estudiante
    }

module.exports = {
    getEstudiante,
    getEstudiantes
}