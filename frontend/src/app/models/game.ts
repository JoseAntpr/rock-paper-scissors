import { Button } from './button';

export class Game {
    private player: Button;
    private machine: Button;

    constructor( player: Button, machine: Button) {
        this.player = player;
        this.machine = machine;
    }

    getWinner() {
        let msg = '';
        if ( this.player.getType() === this.machine.getType()) {
            msg = 'tie';
        } else if (
            (this.player.getType() === 'rock' && this.machine.getType() === 'scissors') ||
            (this.player.getType() === 'paper' && this.machine.getType() === 'rock') ||
            (this.player.getType() === 'scissors' && this.machine.getType() === 'paper')
        ) {
            msg = 'win';
        } else {
            msg = 'lose';
        }

        return msg;
    }
}
