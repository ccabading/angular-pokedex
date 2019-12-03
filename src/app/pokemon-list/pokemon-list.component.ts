import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { PokeApiService } from '../services/PokeApi.service'

import { PokeApi } from '../models/PokeApi';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  response;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit() {
    this.getResponse();
  }

  changeResults(nextUrl: string) {
    this.pokeApiService.setUrl(nextUrl);
    this.getResponse();
  }

  getResponse() {
    this.pokeApiService.getResponse().subscribe(response => {
      this.response = response;
      console.log(response);
    });
  }

}
