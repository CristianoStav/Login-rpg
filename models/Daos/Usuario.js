const sequelize = require('../../config/database').sequelize;
console.log(sequelize.models);
const Usuario = sequelize.models.Usuario;

module.exports = {
    Logar: async (usuario) => {
        let user = await Usuario.findOne({
            where: {
                email: usuario.email
            }
        });

        if (user) {
            return user;
        }

        return null;
    }
};