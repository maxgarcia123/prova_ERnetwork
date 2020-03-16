const {Model,DataTypes} =  require('sequelize');

class Pessoas extends  Model {
    static init(sequelize){
       super.init({
           name: DataTypes.STRING,
           sexo: DataTypes.STRING,
           cpf: DataTypes.STRING,
           rg: DataTypes.STRING,
           cidade: DataTypes.STRING,
           data_nacimento: DataTypes.STRING,
           codigo: DataTypes.INTEGER,
           salario:DataTypes.INTEGER,

       },  {
         sequelize
       })
    } 
}
module.exports = Pessoas;