const environments = require('./environment');
/*
=======================
Port
=======================
*/
process.env.PORT = process.env.PORT || 3100;

/*
=======================
Env
=======================
*/
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/*
=======================
DB
=======================
*/

let urlDB;
if(process.env.NODE_ENV === 'dev'){
    urlDB = environments.dev.database;
} else if (process.env.NODE_ENV === 'test') {
    urlDB = environments.test.database;
}

process.env.URLDB = urlDB;