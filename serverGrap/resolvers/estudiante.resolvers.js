;
'use strict'

const estudianteQueries = require('./queries/estudiantes.queries')
const estudianteMutations = require('./mutations/estudiantes.mutations')


module.exports = {
    Query: estudianteQueries,
    Mutation: estudianteMutations
}