'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('tipo_usuario', 
        { 
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            comment: 'ID da tabela'
          },
          nome: {
            type: Sequelize.STRING( 100 ),
            allowNull: false,
            comment: 'Nome do tipo de usuário'
          }         
        
        }
        );
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('tipo_usuario');
    
  }
};
