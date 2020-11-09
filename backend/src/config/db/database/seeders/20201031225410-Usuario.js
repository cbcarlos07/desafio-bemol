const md5 = require('md5')
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('usuario', [
        {
          nome: 'Carlos',
          cpf: '22131596960',
          cep: '69084100',
          sexo: 'F',
          email: 'carlos@email.com',
          senha: md5('123'),
          tipo_usuario_id: 1
        }
        
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('usuario', null, {});
    
  }
};