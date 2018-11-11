const mongoose = require('mongoose');
const localConfig = require('../config/config');
const conn = mongoose.connection;

conn.on('error', ( err ) => {
    console.log('Error with DB connection', err);
    process.exit(1);
});

conn.once('open', () => {
    console.log('Mongodb is connected and waiting for your requests');
});

mongoose.connect(process.env.URLDB);