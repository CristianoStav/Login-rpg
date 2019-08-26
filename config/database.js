const sequelize = require('./sequelize').sequelize;

sequelize.import('../models/Usuario');

const Usuario = sequelize.models.usuario;

module.exports = { sequelize };