const knex = require('../conexao');
const bcrypt = require('bcrypt');

const listarDadosUsuarioLogado = async (req, res) => {

    return res.status(200).json(req.usuario)

}

const cadastrarContas = async (req, res) => {
    const { nome, email, cpf, data_nascimento, telefone, senha } = req.body

    if (!nome || !email || !cpf || !data_nascimento || !telefone || !senha) {
        return res.status(400).json({ messagem: "Todos os campos são obrigatórios" })
    };

    try {
        const usuarioExiste = await knex('usuarios').where({ cpf }).first()

        if (usuarioExiste) {
            return res.status(400).json('Usuário informado já existe.')
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const usuario = await knex('usuarios').insert({
            nome,
            cpf,
            email,
            data_nascimento,
            telefone,
            senha: senhaCriptografada
        })

        if (!usuario) {
            return res.status(400).json('Usuário não foi cadastrado.')
        }

        return res.status(200).json('Usuário cadastrado com sucesso.')

    } catch (error) {
        return res.status(400).json(error.message);
    }

}

const atualizarUsuario = async (req, res) => {

    let { nome, email, cpf, data_nascimento, telefone, senha } = req.body
    const { id } = req.usuario;
    // //TO DO caso consiga criar o banco não será necessario 
    if (!nome && !email && !cpf && !data_nascimento && !telefone && !senha) {
        return res.status(400).json({ messagem: "É necessario informar ao menos um campo para atualizar" })
    };

    try {
        if (senha) {
            senha = await bcrypt.hash(senha, 10);
        };

        if (cpf !== req.usuario.cpf) {
            const cpfUsuarioExiste = await knex('usuarios').where({ cpf }).first();

            if (cpfUsuarioExiste) {
                return res.status(404).json('O cpf já existe.')
            };
        };

        if (email !== req.usuario.email) {
            const emailUsuarioExiste = await knex('usuarios').where({ email }).first();

            if (emailUsuarioExiste) {
                return res.status(404).json('O email já existe.')
            };
        };


        const usuarioAtualizado = await knex('usuarios')
            .where({ id })
            .update({
                nome,
                cpf,
                email,
                data_nascimento,
                telefone,
                senha
            })

        if (!usuarioAtualizado) {
            return res.status(400).json('Usuário não foi atualizado.')
        }

        return res.status(200).json('Usuário atualizado com sucesso.')



    } catch (error) {
        return res.status(400).json(error.message);
    }



}




module.exports = {
    listarDadosUsuarioLogado,
    cadastrarContas,
    atualizarUsuario,

}