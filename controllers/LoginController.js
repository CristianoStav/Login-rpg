const modelUsuario = require('../models/Daos/Usuario');

module.exports = {
    logar: async (req, res) => {
        const usuario = req.body;
        const user = await modelUsuario.Logar(usuario);

        return res.json(user);
    }
};