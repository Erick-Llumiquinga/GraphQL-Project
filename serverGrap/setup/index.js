; 
'use strict'

const env = require('dotenv').config(),
    { graphqlHTTP } = require('express-graphql'),
    { schema } = require('../schemas/configSchema'),
    isAuth = require('../middleware/Auth'),
    port = process.env.PORT || 3500

let app = require('./app')

app.use(isAuth);

//base de nuestro servidor
app.use('/gql', graphqlHTTP({
    schema:  schema,
    graphiql: true
}))

app.listen(port, (err) => {
    if(!err){
        console.log(`El servidor corre en el puerto: http://localhost: ${port}`)
    }else{
        console.log('El servicio no està funcionando')
    }
})

