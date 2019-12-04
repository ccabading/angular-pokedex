import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PokeApi } from '../models/PokeApi';
import { Pokemon } from '../models/Pokemon';

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

  getResults(): Observable<PokeApi[]> {
    return this.http.get<PokeApi[]>(this.url);
  }

  getPokemonDetails(url: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(url);
  }

}
