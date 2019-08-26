require('dotenv').config();

module.exports = {
    development: {
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: "Users",
        host: process.env.MYSQL_HOST,
        dialect: 'mysql',
        logging: false,
        freezeTableName: true,
    }
};
