import { TestBed, inject } from '@angular/core/testing';

import { MovesService } from './moves.service';
import { HttpClientModule } from '@angular/common/http';
import { Message } from '../models/message';

describe('MovesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [MovesService]
    });
  });

  it('should be created', inject([MovesService], (service: MovesService) => {
    expect(service).toBeTruthy();
  }));

  it('should get moves messages from server', async () => {
    const service: MovesService = TestBed.get(MovesService);

    service.getMoves().subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );
  });

  it('should post move message to server', async () => {
    const service: MovesService = TestBed.get(MovesService);

    const move = new Message('win', 'scissors', 'paper', 'You win');

    service.createMove(move).subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );
  });

  it('should post move message to server and failed', async () => {
    const service: MovesService = TestBed.get(MovesService);

    const move = new Message('win', '', 'paper', 'You win');

    service.createMove(move).subscribe(
      (response) => response,
      (error) => expect(error).not.toBeNull()
    );
  });
});
