;
'use strict'

const { makeExecutableSchema } = require('graphql-tools'), { join } = require('path'), { readFileSync } = require('fs'),

    pruebaResolver = require('../resolvers/login.resolvers'),
    cursoResolver = require('../resolvers/curso.resolvers'),
    estudianteResolver = require('../resolvers/estudiante.resolvers'),
    usuarioResolvers = require('../resolvers/usuario.resolvers'),
    loginResolvers = require('../resolvers/login.resolvers')


let typeDefs = readFileSync(join(__dirname, '../schemas', 'schema.graphql'), 'utf-8')
let schema = makeExecutableSchema({
    typeDefs,
    resolvers: [
        cursoResolver,
        pruebaResolver,
        estudianteResolver,
        usuarioResolvers,
        loginResolvers
    ]
})


module.exports = { schema }