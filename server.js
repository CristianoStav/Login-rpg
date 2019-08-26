const app = require('./config/express');
const port = process.env.PORT;

require('./config/sequelize');

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});