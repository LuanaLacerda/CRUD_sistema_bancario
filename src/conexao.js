const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-34-231-221-151.compute-1.amazonaws.com',
        user: 'lnheguijquumss',
        password: 'c8077da8da6e0b274feeeba556b87e9febaa47419f4d320893e1fcb968f74872',
        database: 'd2v83rmk915clg',
        port: 5432,
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = knex