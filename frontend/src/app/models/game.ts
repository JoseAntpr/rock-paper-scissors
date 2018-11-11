import { Button } from './button';

export class Game {
    private player1: Button;
    private player2: Button;

    constructor( player1: Button, player2: Button) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getWinner() {
        let msg = '';
        if ( this.player1.getType() === this.player2.getType()) {
            msg = 'tie';
        } else if (
            (this.player1.getType() === 'rock' && this.player2.getType() === 'scissors') ||
            (this.player1.getType() === 'paper' && this.player2.getType() === 'rock') ||
            (this.player1.getType() === 'scissors' && this.player2.getType() === 'paper')
        ) {
            msg = 'win';
        } else {
            msg = 'lose';
        }

        return msg;
    }

}
