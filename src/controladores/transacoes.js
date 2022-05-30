const knex = require('../conexao');

const deposito = async (req, res) => {
    const { id } = req.usuario;
    const { valor } = req.body

    if (!valor) {
        return res.status(400).json({ messagem: "É obrigatório informar um valor" })
    };

    if (valor <= 0) {
        return res.status(400).json({ mensagem: 'O valor não pode ser menor ou igual a 0' });
    }

    try {
        const deposito = await knex('transacoes').insert({ tipo: "E", valor, id_usuario: id }).returning("*").debug();

        await knex('usuarios')
            .where({ id })
            .increment('saldo', valor).debug()

        return res.status(200).json(deposito)

    } catch (error) {
        return res.status(400).json(error.message)
    }
};

const saque = async (req, res) => {
    const { id, saldo } = req.usuario;
    const { valor } = req.body

    if (!valor) {
        return res.status(400).json({ messagem: "É obrigatório informar um valor" })
    };

    if (valor <= 0) {
        return res.status(400).json({ mensagem: 'O valor não pode ser menor ou igual a 0' });
    }

    if (valor > saldo) {
        return res.status(400).json({ messagem: "Você não possui saldo suficiente para o saque" })
    }

    try {
        const saque = await knex('transacoes').insert({ tipo: "S", valor, id_usuario: id }).returning("*")

        await knex('usuarios')
            .where({ id })
            .decrement('saldo', valor).debug()

        return res.status(200).json(saque)

    } catch (error) {

    }
};

const obterSaldo = async (req, res) => {
    return res.status(200).json(req.usuario.saldo)
};

const transacoesRealizadas = async (req, res) => {
    const { id } = req.usuario

    try {
        const transacoes = await knex('transacoes')
            .where('id_usuario', id)

        return res.status(200).json(transacoes)

    } catch (error) {
        return res.status(400).json(error.message);
    }
};


module.exports = {
    deposito,
    saque,
    obterSaldo,
    transacoesRealizadas
}