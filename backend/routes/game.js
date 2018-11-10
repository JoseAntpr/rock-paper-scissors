const express = require('express');

const app = express();

/*
===============================
Get random hand to machine user
===============================
*/
router.get('/hand', ( req, res, next ) => {

    const number = Math.floor(Math.random * 2);

    res.json({ ok: true, hand: number });

});