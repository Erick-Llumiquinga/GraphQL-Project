;
'use strict'

let Usuarios = require('../models/Usuarios');
let { ObjectID } = require('mongodb');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

let login = async(root, { input }) => {
    let user
    if (input.email == "" || input.password == '') {
        return 'Campos Vacios';
    }
    user = await Usuarios.find({ 'email': input.email })

    if (bcrypt.compareSync(input.password, user[0].password)) {
        let token = jwt.sign({ data: user[0] }, process.env.KEY_JWT, { algorithm: 'HS256', expiresIn: 60000 })
            //user.token = token
        console.log(token)
        return user[0]
    } else {
        console.log('Credenciales incorrectas');
    }
}

module.exports = {
    login
}