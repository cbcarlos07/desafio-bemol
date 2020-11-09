const md5 = require('md5')
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('usuario', [
        {
          nome: 'Carlos',
          cpf: '22131596960',
          cep: '69084100',
          sexo: 'M',
          email: 'carlos@email.com',
          senha: md5('123'),
          tipo_usuario_id: 1
        },
        {
          nome: 'Bruno',
          cpf: '22131596988',
          cep: '69084100',
          sexo: 'M',
          email: 'bruno@email.com',
          senha: md5('1234'),
          tipo_usuario_id: 2
        },
        {
          nome: 'Brito',
          cpf: '22131596999',
          cep: '69084100',
          sexo: 'M',
          email: 'britoo@email.com',
          senha: md5('12345'),
          tipo_usuario_id: 2
        }
        
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('usuario', null, {});
    
  }
};