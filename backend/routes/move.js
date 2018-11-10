const express = require('express');

const app = express();

// Model
const Move = require('../models/Move');

/*
=======================
Get all history moves messages
=======================
*/
app.get('/moves',  async ( req, res, next )  => {
    try{
        let moves = await Move.find({}).sort('-date');

        return res.status(200).json({
            ok: true,
            moves: moves
        })
    }catch ( e ) {
        next(e);
    }
});

/*
=======================
Post move message
=======================
*/
app.post('/moves', async ( req, res, next ) => {
    let body = req.body;

    let move = new Move({
        text: body.text,
        result: body.result,
        date: body.date,
        player1: body.player1,
        player2: body.player2
    });

    try{
        let moveDB = await move.save();

        res.status(201).json({
            ok: true,
            move: moveDB
        });

    }catch (e) {
        next(e);
    }
});

module.exports = app;
