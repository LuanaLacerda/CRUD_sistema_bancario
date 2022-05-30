const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-34-231-221-151.compute-1.amazonaws.com',
        user: 'lnheguijquumss',
        password: '270808',
        database: 'd2v83rmk915clg',
        port: 5432,
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = knex