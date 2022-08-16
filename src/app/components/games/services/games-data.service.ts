import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Game } from '../interfaces/game';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GamesDataService {
  constructor(private http: HttpClient) {}

  public getGames(): Observable<Game[]> {
    const url = environment.baseUrl + 'applicant-test/';
    return this.http.get<Game[]>(url);
  }
}
