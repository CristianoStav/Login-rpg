const Sequelize = require('sequelize');
const config = require('./config')[process.env.NODE_ENV];

const sequelize = new Sequelize(config);

sequelize.authenticate()
    .then(() => console.log('conectado no Banco de dados!'))
    .catch((err) => console.log(`Erro na conexão: `, err.message));

module.exports = { sequelize, Sequelize };