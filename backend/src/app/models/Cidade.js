{/*conecção do sequelize com as tabelas*/}
const {Model,DataTypes} =  require('sequelize');

class Cidade extends  Model {
    static init(sequelize){
       super.init({
           name: DataTypes.STRING,
           uf: DataTypes.STRING,
           codigo: DataTypes.INTEGER
           
       },  {
         sequelize
       })
    } 
}
module.exports = Cidade;