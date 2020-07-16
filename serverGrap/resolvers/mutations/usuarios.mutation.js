const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/Usuarios');
const passwordMiddleware = require('../../middleware/Password');
const Usuarios = require('../models/Usuarios');

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
},

editarUser = async (root, {id, input}) =>{
    let user
    try{
        
        await Usuarios.updateOne(
             {_id: ObjectID(id)},
             { $set: input}
         )
        
        user = await Usuarios.find({_id: ObjectID(id)}) 
    }catch(error){
        console.error(error)
    }
    return user[0]
},

eliminarUser = async (root, {id}) =>{
    let deleted = false;
    try{
        let data = await Usuarios.deleteOne({_id: ObjectID(id)})
        if(data){
            return deleted = true
        } else {
            return deleted 
        }
    }catch(error){
        console.error(error)
    }
}

 module.exports = {
     nuevoUser,
     editarUser,
     eliminarUser  
 };  










