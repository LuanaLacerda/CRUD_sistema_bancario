require('dotenv').config();
const express = require('express');
const rotas = require('./rotas');
const app = express();
const cors = require('cors')


app.use(express.json());


app.use(express.json());
app.use(rotas);
app.use(cors());


module.exports = app