import { Component, OnInit } from '@angular/core';

// Models
import { Button } from 'src/app/models/button';
import { Game } from 'src/app/models/game';
import { Message } from 'src/app/models/message';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  history: Message[] = [];
  playerHand = '';
  machineHand = '';

  constructor() { }

  ngOnInit() {
  }

  play( button: number ) {
    const player = new Button(button);
    const machine = this.getRandom();

    this.game(player, machine);

  }

  private game(player: Button, machine: Button) {
    let result = '';
    let message: Message;
    const game = new Game(player, machine);

    this.playerHand = player.getType();
    this.machineHand = machine.getType();

    result = game.getWinner();
    message = new Message(result, this.playerHand, this.machineHand);

    this.history.unshift(message);

  }


  private getRandom() {
    return new Button(Math.round(Math.random() * 2));
  }

}
