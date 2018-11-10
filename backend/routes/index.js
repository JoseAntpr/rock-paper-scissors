const express = require('express');

const app = express();

app.use(require('./move'));

module.exports = app;