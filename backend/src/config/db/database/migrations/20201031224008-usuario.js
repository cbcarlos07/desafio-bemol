'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('usuario', 
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
            comment: 'Nome do Usuário'
          },          
          cpf: {
            type: Sequelize.STRING( 11 ),
            allowNull: false,
            comment: 'Cpf do Usuário',
            unique : true,
          },
          cep: {
            type: Sequelize.STRING( 11 ),
            allowNull: false,
            comment: 'CEP do Usuário'
          },
          sexo: {
            type: Sequelize.CHAR( 1 ),
            allowNull: false,
            comment: 'Sexo do Usuário'
          },
          email: {
            type: Sequelize.STRING( 100 ),
            allowNull: false,
            comment: 'E-mail do Usuário',
            unique : true,
          },          
          senha: {
            type: Sequelize.STRING( 100 ),
            allowNull: false,
            comment: 'Senha do usuario'
          },
          tipo_usuario_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            comment: 'Codigo do tipo de usuario',
            references: { model: 'tipo_usuario', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
        }
        );
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('usuario');
    
  }
};
