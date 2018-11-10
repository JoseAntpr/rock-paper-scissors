const express = require('express');

const app = express();

/*
===============================
Get random hand to machine user
===============================
*/
app.get('/hand', ( req, res, next ) => {
    try {
        const hand = Math.floor(Math.random() * 3);

        return res.json({ ok: true, hand: hand });
    }catch (e) {
        next(e)
    }

});

module.exports = app;