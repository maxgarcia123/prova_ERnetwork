{/*conecção das migrations com o banco*/}
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Cidade = require('../app/models/Cidade')
const Pessoa = require('../app/models/Pessoa')

const connection = new Sequelize(dbConfig);

Cidade.init(connection);
Pessoa.init(connection);

module.exports = connection;