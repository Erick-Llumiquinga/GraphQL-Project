;
'use strict'

const userQuery = require('./queries/usuarios.queries')
//const loginMutation = require('./queries/createUser.resolvers')
const userMutation = require('./mutations/usuarios.mutation')

module.exports = {
    Query: userQuery,
    Mutation : userMutation, 
}








