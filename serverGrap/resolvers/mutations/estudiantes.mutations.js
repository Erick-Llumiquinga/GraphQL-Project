;
'use strict'

let Estudiantes = require('../models/Estudiantes');
let { ObjectID } = require('mongodb')

let nuevoEstudiante = async (root, {input}) =>{
    let estudiante
    try{
        estudiante = await Estudiantes.insertOne(input)

    }catch(error){
        console.error(error)
    }
    return  estudiante.ops[0]
},

editarEstudiante = async (root, {id, input}) =>{
    let estudiante
    try{
         await Estudiantes.updateOne(
             {_id: ObjectID(id)},
             {$set: input}
         )
        estudiante = await Estudiantes.find({_id: ObjectID(id)})
    }catch(error){
        console.error(error)
    }
    return  estudiante[0]
}

module.exports = {
    nuevoEstudiante,
    editarEstudiante
}