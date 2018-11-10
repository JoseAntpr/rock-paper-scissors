const express = require('express');
const app = express();

// Connect with MongoDB
require('./lib/mongooseConnect');

app.listen(process.env.PORT, () => {
    console.log('Listen in port: ', process.env.PORT);
});