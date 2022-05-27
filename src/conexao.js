const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '270808',
        database: 'banco'
    }
});

module.exports = knex