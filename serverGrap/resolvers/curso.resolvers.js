;
'use strict'

const cursoQueries = require('./queries/cursos.queries')
const cursoMutations = require('./mutations/cursos.mutations')
const cursoTypes = require('./types/curso.types')


module.exports = {
    Query: cursoQueries,
    Mutation: cursoMutations,
    ...cursoTypes
}