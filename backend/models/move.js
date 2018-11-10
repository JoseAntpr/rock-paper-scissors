const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let valid_results = {
    values: ['win', 'lose', 'tie'],
    message: '{VALUE} is not valid game result'
}

let valid_player = {
    values: ['rock', 'paper', 'scissors'],
    message: '{VALUE} is not valid game hand'
}

let moveSchema = new Schema({
    text: { String, required: true },
    result: { String, enum: valid_results, required: true}, 
    date: { type: Date, default: Date.now},
    player1: { String, enum: valid_player, required: true },
    player2: { String, enum: valid_player, required: true }
});

module.exports = mongoose.model('Move', moveSchema);