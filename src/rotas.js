const express = require("express");
const contas = require('./controladores/contas');
const rotas = express();
const login = require('./controladores/login');
const verificaLogin = require('./filtros/verificarLogin')
const transações = require('./controladores/transacoes')
const swaggerUi = require('swagger-ui-express');

//Documentação Api
rotas.use("/docs", swaggerUi.serve, swaggerUi.setup(require('../swagger.json')))

//Cadastro conta
rotas.post('/contas', contas.cadastrarContas);

//login
rotas.post('/login', login);

//filtro para veriicar login
rotas.use(verificaLogin);

//obter e atualizar usuario
rotas.get('/usuario', contas.listarDadosUsuarioLogado);
rotas.put('/usuario', contas.atualizarUsuario);

//transações

rotas.post('/deposito', transações.deposito);
rotas.post('/saque', transações.saque);
rotas.get('/saldo', transações.obterSaldo);
rotas.get('/transacoes', transações.transacoesRealizadas);

module.exports = rotas;
