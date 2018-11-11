export class Message {
    _id: string;
    text: string;
    result: string;
    date: Date;
    player1: string;
    player2: string;

    constructor(result: string, player1: string, player2: string, text?: string, date?: Date, _id?: string ) {
        this._id = _id;
        this.result = result;
        this.text = text || this.getMessage();
        this.date = date || new Date();
        this.player1 = player1;
        this.player2 = player2;
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
