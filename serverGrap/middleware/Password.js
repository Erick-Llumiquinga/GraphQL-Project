; 
'use strict'

const bcrypt =  require('bcrypt')

let encritpPass = (input) => {
    console.log(input)
    let usuario = input || null

    if(!usuario || usuario.password == "" || !usuario.password)
    {
        return false;

    } else {
        let encriptPass = bcrypt.hashSync(usuario.password, bcrypt.genSaltSync(10))
        if(encriptPass)
        {
            return encriptPass;
        }
    }
}

let PermissionsByRole = async (req, res, next) => {
    let db = await connectDB(),
        usuario = req.body.usuario

    if(!usuario || usuario.password == "" || !usuario.password)
    {
        return res.status(400).send('Usuario o contraseña no valido');
    } else {

    }
}

module.exports = {
    encritpPass
}