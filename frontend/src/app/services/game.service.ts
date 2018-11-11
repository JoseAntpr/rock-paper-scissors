import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Environment
import { environment } from 'src/environments/environment';

// Models
import { Button } from 'src/app/models/button';

@Injectable()
export class GameService {

  constructor(
    private _http: HttpClient
  ) { }

  getHand(): Observable<Button> {
    return this._http.get(`${environment.apiUrl}hand`)
      .pipe(
        map( ( data: any ) => new Button(data.hand))
      );
  }
}
