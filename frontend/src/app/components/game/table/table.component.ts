import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { Button, Type } from 'src/app/models/button';
import { Game } from 'src/app/models/game';
import { Message } from 'src/app/models/message';

// Services
import { MovesService } from '../../../services/moves.service';
import { GameService } from 'src/app/services/game.service';

// RxJS
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {

  history: Message[] = [];
  player1Hand = '';
  player2Hand = '';
  isRemote: boolean;
  subscription: Subscription[] = [];

  constructor(
    private _router: Router,
    private _movesService: MovesService,
    private _gameService: GameService
  ) { }

  ngOnInit() {
    this.isRemote = this._router.url.includes('remote');
    if ( this.isRemote) {
      this.getHistory();
    }
  }

  ngOnDestroy() {
    this.subscription.map( observables => observables.unsubscribe );
  }

  play( button: number ) {
    const player1 = new Button(button);
    let player2: Button;

    if ( this.isRemote ) {
      this.subscription.push( this._gameService.getHand().subscribe(hand => {
        player2 = hand;
        this.game(player1, player2);
      }));
    } else {
      player2 = this.getRandom();
      this.game(player1, player2);
    }

  }

  private game(player: Button, player2: Button) {
    let result = '';
    let message: Message;
    const game = new Game(player, player2);

    this.player1Hand = player.getType();
    this.player2Hand = player2.getType();

    result = game.getWinner();
    message = new Message(result, this.player1Hand, this.player2Hand);

    if ( this.isRemote ) {
      this._movesService.createMove(message)
        .subscribe();
    }

    this.history.unshift(message);

  }


  private getRandom() {
    return new Button(Math.floor(Math.random() * Object.keys(Type).length / 2));
  }

  private getHistory() {
    this.subscription.push(this._movesService.getMoves()
      .subscribe( moves => this.history = moves));
  }

}
