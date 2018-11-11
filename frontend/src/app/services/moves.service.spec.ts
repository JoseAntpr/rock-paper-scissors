import { TestBed, inject } from '@angular/core/testing';

import { MovesService } from './moves.service';
import { HttpClientModule } from '@angular/common/http';

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
});
