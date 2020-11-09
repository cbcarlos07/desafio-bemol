
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('tipo_usuario', [
        {
          nome: 'Cliente'
        },
        {
          nome: 'Atendente'
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('tipo_usuario', null, {});
    
  }
};