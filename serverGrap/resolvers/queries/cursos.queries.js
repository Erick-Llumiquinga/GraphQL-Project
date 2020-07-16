;
'use strict'

let Cursos = require('../models/Cursos');
let { ObjectID } = require('mongodb')
let jwt = require('jsonwebtoken')

let getCursos = async() => {
        // if(!req.isAuth){
        //     throw new Error('No tiene Permisos')
        // }
        // else {
        let cursos
        try {
            cursos = await Cursos.find()
                // if(cursos) {    
                //     token = jwt.sign({ data: cursos }, process.env.KEY_JWT, {
                //         algorithm: "HS256",
                //         expiresIn: 600,
                //     });
                // } else {
                //     console.log('error')
                // }
        } catch (error) {
            console.error(error)
        }
        return cursos
            // }
    },

    getCurso = async(root, { id }) => {
        let curso
        try {
            curso = await Cursos.find({ _id: ObjectID(id) })
        } catch (error) {
            console.error(error)
        }
        return curso
    }

module.exports = {
    getCursos,
    getCurso
}