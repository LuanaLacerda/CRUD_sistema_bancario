# Simulação de um Sistema Bancário


## Introdução

Projeto que faz uma simulação de um Sistema Bancário

## Linguagem, framework e/ou tecnologias usadas# Simulação de um Sistema Bancário


## Introdução

Projeto que faz uma simulação de um Sistema Bancário

## Linguagem, framework e/ou tecnologias usadas

- NodeJs
- Javascript
- PostegreSQL
- ExpressJs
- Bcrypt
- Dotenv
- JsonWebtoken
- Knex

## Instalação

É necessário possuir o ambiente Node.js instalado para executar este projeto. 

- 1 - Clonar este repositóiro
- 2 - Utilizar $ npm install na pasta raiz do projeto

## Deploy

Projeto está hospedado pelo Heroku para utilizar a API utilizar o link abaixo:

 https://crud-sistema-bancario.herokuapp.com/

## Documentação

Acesse a documentação através do [link](https://crud-sistema-bancario.herokuapp.com/docs/#/).

https://crud-sistema-bancario.herokuapp.com/docs/#/


## Rotas

- ```[POST]/contas``` : Cadastro do Usuário gerando uma nova conta

- ```[POST]/login``` : Login do usuário

- ``[GET]/usuario``: Disponibiliza dados do usuário logado

- ``[PUT]/usuario``: Atualiza dados do usuário logado

- ```[POST]/desposito``` : Deposita dinheiro no saldo do usuário logado

- ```[POST]/saque``` : Retira dinheiro no saldo do usuário logado


- ```[GET]/saldo``` : Informa o saldo do usuário logado

- ```[GET]/transacoes``` : Informa as transaçoes do usuário logado

