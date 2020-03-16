'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('pessoas', { 
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement:true,
          allowNull:false,
        },
        codigo:{
          type: Sequelize.INTEGER,
          allowNull:false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sexo:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        rg:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        cpf:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        data_nacimento:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        salario:{
          type: Sequelize.FLOAT,
          allowNull:false,
        },
        cidade:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        created_at:{
          type: Sequelize.DATEONLY,
          allowNull:false
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull:false
        },
      });
  
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.dropTable('pessoas');
    
  }
};

