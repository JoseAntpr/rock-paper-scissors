import { Game } from './game';
import { Button } from './button';

describe('Test game model', () => {


    it('Should be winner with player1 is paper and player2 is rock', () => {
        let result;
        const game = new Game(new Button(0), new Button(2));

        result = game.getWinner();

        expect(result).toBe('win');

    });

    it('Should be winner with player1 is rock and player2 is paper', () => {
        let result;
        const game = new Game(new Button(2), new Button(0));

        result = game.getWinner();

        expect(result).toEqual('lose');

    });

    it('Should be winner with player1 is rock and player2 is paper', () => {
        let result;
        const game = new Game(new Button(0), new Button(0));

        result = game.getWinner();

        expect(result).toEqual('tie');

    });

});
