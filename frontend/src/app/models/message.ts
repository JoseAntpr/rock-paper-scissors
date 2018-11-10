export class Message {
    text: string;
    result: string;
    date: Date;
    player: string;
    machine: string;

    constructor(result: string, player: string, machine: string) {
        this.result = result;
        this.text = this.getMessage();
        this.date = new Date();
        this.player = player;
        this.machine = machine;
    }

    getMessage(): string {
        let text = '';

        if ( this.result === 'win') {
            text = 'You win';
        } else if (this.result === 'tie') {
            text = 'It´s tie';
        } else {
            text = 'You lose';
        }
        return text;
    }
}
