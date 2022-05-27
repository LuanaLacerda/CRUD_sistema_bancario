const express = require("express");
const contas = require('./controladores/contas');
const rotas = express();
const login = require('./controladores/login');
const verificaLogin = require('./filtros/verificarLogin')

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

module.exports = rotas;
