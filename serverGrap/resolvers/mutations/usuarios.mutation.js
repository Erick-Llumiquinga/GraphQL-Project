const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/Usuarios');
let connectDb = require('../../config/db')
const { AwaitVariablesLink } = require('graphql-tools');

 module.exports = {
    
//     createUser: async  =>{
//         let userInput = []
//         let args
//         try{
//              existUser = await users.findOne({email: args.userInput.email})
//              if(existUser){
//                  throw new Error('usuario ya existe');
//              }

//              const hashedPassword = await bcrypt.hash(args.userInput.password, 10)

//              const user = new User({
//                  email: args.userInput.email,
//                  password: hashedPassword
//              });

//              const result = await user.save();

//              return { ...result._doc, password: null, id: result.id };
//         }catch(err){
//             console.error(err);
//         }
//     }

        nuevoUser: async (root, {input}) =>{
            const defaults = 
            {
                email: '',
                password: ''
            }
            const nuevoUser = Object.assign(defaults, input)

            try{
                user = await User.create(nuevoUser)
                nuevoUser._id = user.insertedId
                
                if(user) {
                        
                    token = jwt.sign({ data: user }, 'hola', {
                        algorithm: "HS256",
                        expiresIn: 600,
                    });
                return user,
                console.log(token)
        
            }else{
                console.log('error')
            }

            }catch(error){
                console.error(error)
            }
            console.log(nuevoUser)
            return  nuevoUser
        },
        login: async ( {email, password}) => {
            // console.log(email)
            let user
            // try {
                db = await connectDb()
                user = await  db.collection('users').find({email: email})
                //console.log(user)
                if(!user) {
                    console.log('No existe')
                } else if (password !== user.password) {
                    console.log('Çlave o correo incorrectos')
                } else {
                    let token = await jwt.sign(user, 'secret', {
                        algorithm: 'HS256',
                        expiresIn: 50
                    })
                    console.log(token)
                    return user
                }
                // } catch (e) {
            //     console.error(e)
            //     return e
            // }
        },
    //     login: async (root, {email}) =>{
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
    //     const isEqual =  await bcrypt.compare(password, users.password);
    //     if(!isEqual){
    //         throw new Error ('Password invàlido');
    //     }
    //     return { userId: user.id , token: token, tokenExpiration: 1 }
    //     return user
        
    // }
 };  










