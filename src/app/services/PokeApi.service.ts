import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PokeApiResults } from '../models/PokeApiResults';
import { Pokemon } from '../models/PokemonDetails';

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

  getPokeApiResults(): Observable<PokeApiResults[]> {
    return this.http.get<PokeApiResults[]>(this.url);
  }

  getPokemonDetails(url: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(url);
  }

}
