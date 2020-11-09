'use strict';
const Sequelize = require('sequelize')
module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('contato', 
        { 
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            comment: 'ID da tabela'
          },
          interacao_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            comment: 'Codigo da interacao',
            references: { model: 'interacao', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
          usuario_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            comment: 'Codigo da usuario',
            references: { model: 'usuario', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
          dt_mensagem: {
            type: Sequelize.DATE,
            allowNull: false,
            comment: 'Data da mensagem',
            defaultValue: Sequelize.fn('now')
          },
          mensagem: {
            type: Sequelize.TEXT,
            allowNull: false,
            comment: 'Texto do usuário',
          },
        }
        );
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('contato');
    
  }
};
