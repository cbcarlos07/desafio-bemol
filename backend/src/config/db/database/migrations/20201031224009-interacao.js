'use strict';
const Sequelize = require('sequelize')
module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('interacao',
        { 
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            comment: 'ID da tabela'
          },
          usuario_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            comment: 'Codigo da usuario',
            references: { model: 'usuario', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
          dt_interacao: {
            type: Sequelize.DATE,
            allowNull: false,
            comment: 'Data da interação',
            defaultValue: Sequelize.fn('now')
          },          
          
        }
        );
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('interacao');
    
  }
};
