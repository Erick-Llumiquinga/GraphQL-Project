;
'use strict'

let Estudiantes = require('../models/Estudiantes');
let { ObjectID } = require('mongodb')

let nuevoEstudiante = async(root, { input }) => {
        let estudiante
        try {
            estudiante = await Estudiantes.create(input)

        } catch (error) {
            console.error(error)
        }
        return estudiante[0]
    },

    editarEstudiante = async(root, { id, input }) => {
        let estudiante
        try {
            await Estudiantes.updateOne({ _id: ObjectID(id) }, { $set: input })
            estudiante = await Estudiantes.find({ _id: ObjectID(id) })
        } catch (error) {
            console.error(error)
        }
        return estudiante[0]
    },

    eliminarEstudiante = async(root, { _id }) => {
        let deleted = false;
        try {
            let data = await Estudiantes.deleteOne({ _id })
            if (data) {
                return deleted = true
            } else {
                return deleted
            }
        } catch (error) {
            console.error(error)
        }
    }

module.exports = {
    nuevoEstudiante,
    editarEstudiante,
    eliminarEstudiante
}