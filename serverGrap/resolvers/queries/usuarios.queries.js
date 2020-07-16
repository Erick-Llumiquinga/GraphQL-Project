const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Usuario = require('../models/Usuarios')
let {ObjectID} = require('mongodb')

let getUsers = async () =>{
    let usuario

    usuario = await Usuario.find()

    if(usuario){
        return usuario
    }

    return 'No ahi usuarios';
},

getUser = async (root, { id }) => {
    let usuarios
    try{
        usuarios = await Usuario.find({_id: ObjectID(id)})
    }catch(err){
        console.error(err)
    }
    return usuarios
}
// login: async (root, {email}) =>{
//     const user = await User.findOne( { email: email });
//     if(!user){
//         console.log('Usuario invalido');
//         //throw new Error ('user invàlido');
//     }else {
//         let token = jwt.sign({userId: user.id, email: user.email}, process.env.KEY_JWT, {
//             algorithm: "HS256",
//             expiresIn: '1h'
//         });
//     }
//     // const isEqual =  await bcrypt.compare(password, users.password);
//     // if(!isEqual){
//     //     throw new Error ('Password invàlido');
//     // }
//     //return { userId: user.id , token: token, tokenExpiration: 1 }
//     return user
    
// }

module.exports = {
  getUser,
  getUsers
};  










