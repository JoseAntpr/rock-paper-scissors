const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.redirect('https://documenter.getpostman.com/view/1688848/RzZ9Gekn');
});

module.exports = app;