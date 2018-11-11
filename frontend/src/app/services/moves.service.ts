import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Models
import { Message } from '../models/message';

// Environment
import { environment } from '../../environments/environment';

@Injectable()
export class MovesService {

  constructor(
    private _http: HttpClient
  ) { }

  getMoves(): Observable<Message[]> {
    return this._http.get(`${environment.apiUrl}moves`)
      .pipe(
        map( (data: any) => data.moves)
      );
  }

  createMove(move: Message): Observable<any> {
    return this._http.post(`${environment.apiUrl}moves`, move)
      .pipe(
        map( (data: any ) =>  data.move)
      );
  }

}
