;
'use strict'

const mongoose = require('mongoose'),
      { Schema } = mongoose,

      UsuarioModel = new Schema(
          {
              email: {type: String},
              password: {type: String}
          }
      );

module.exports = mongoose.model('Usuarios', UsuarioModel, 'usuarios')
