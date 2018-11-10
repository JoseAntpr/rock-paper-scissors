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
    text: String,
    result: { type: String, enum: valid_results, required: [true, 'result is required']}, 
    date: { type: Date, default: Date.now },
    player1: { type: String, enum: valid_player, required: [true, 'player1 is required']},
    player2: { type: String, enum: valid_player, required: [true, 'player2 is required']}
});

module.exports = mongoose.model('Move', moveSchema);