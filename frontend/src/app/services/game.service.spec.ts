import { TestBed, inject } from '@angular/core/testing';

import { GameService } from './game.service';
import { HttpClientModule } from '@angular/common/http';

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [GameService]
    });
  });

  it('should be created', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));
  it('should get a hand', () => {
    const service: GameService = TestBed.get(GameService);

    service.getHand().subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );

  });
});
