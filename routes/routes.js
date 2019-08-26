const Router = require('express').Router();
const LoginController = require('../controllers/LoginController');

Router.post('/logar', LoginController.logar);

module.exports = Router;