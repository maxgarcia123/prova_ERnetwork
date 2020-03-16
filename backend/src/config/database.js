{/* configuração para ascessar o banco de dados*/}
module.exports = {
 dialect: 'mysql',
 host: 'localhost',
 username: 'max',
 password: 'garcia964801',
 database: 'prova_max_garcia',
 define: { 
     timestamps: true,
     underscored: true,
     underscoredALL: true,

},
};