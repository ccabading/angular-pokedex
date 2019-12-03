import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PokeApi } from '../models/PokeApi';

@Injectable({
  providedIn: 'root'
})

export class PokeApiService {

  url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private http: HttpClient
  ) { }

  setUrl(url: string) {
    this.url = url;
  }

  getResponse(): Observable<PokeApi[]> {
    return this.http.get<PokeApi[]>(this.url);
  }
}
