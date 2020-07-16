const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/Usuarios');
const passwordMiddleware = require('../../middleware/Password')

let nuevoUser = async (root, {input}) =>{

    let user
    let passEncript = passwordMiddleware.encritpPass(input);
    try{
        if(passEncript != false){
            input.password = passEncript
            user = await User.create(input)
            if(user) {
                token = jwt.sign({ data: user }, process.env.KEY_JWT, {
                    algorithm: "HS256",
                    expiresIn: 60000,
                });
            return user,
            console.log(token)
        }else{
            console.log('error')
        }
        }
        

    }catch(error){
        console.error(error)
    }
    console.log(nuevoUser)
    return  nuevoUser
}


 module.exports = {
     nuevoUser        
 };  










