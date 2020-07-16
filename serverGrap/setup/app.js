;
'use strict'
//definimos el express y el body-parser
const express = require('express'),
    bodyParser = require('body-parser'),
    connectDb = require('../config/db'),
    passport = require('passport'),
    cors = require('cors'),
    parseurl = require('parseurl')

//designamos a un archivo donde van estar las rutas para poder utilizar el servidor
let app = express()
    session = require('express-session')
    db = connectDb(),

    sess = {
        secret: 'hola',
        resave: false,
        saveUninitialized: true,
        name: 'sessionID',
        cookie: {
            httpOnly: false,
            maxAge: parseInt(process.env.TIEMPO)
        }

    },
    corsOptions = {
        origin: 'http://localhost:4200',
        optionsSuccessStatus: 200
    }




//configuracion del body-parser
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

//configuracion del CORS
app.use(cors(corsOptions))
//Session
app.use(session(sess))

//Passport
app.use(passport.initialize())
app.use(passport.session())


module.exports = app