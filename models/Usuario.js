const config = require('../config/sequelize');
const Sequelize = config.Sequelize;
const sequelize = config.sequelize;

const Usuario = sequelize.define('Usuario', {
    _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING
    },
    password: {
        allowNull: false,
        type: Sequelize.STRING
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
    },
}, {
        timestamps: false,
        paranoid: true,
        underscored: false,
        freezeTableName: true,
    });

module.exports = () => Usuario;