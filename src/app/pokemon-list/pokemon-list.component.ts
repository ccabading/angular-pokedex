import { Component, OnInit, HostListener } from '@angular/core';
import { Injectable } from '@angular/core';
import { PokeApiService } from '../services/PokeApi.service';

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
    this.getResults();
  }

  changeResults(nextUrl: string) {
    this.pokeApiService.setUrl(nextUrl);
    this.getResults();
  }

  getResults() {
    this.pokeApiService.getResults().subscribe(response => {
      this.response = response;
      console.log(this.response);
    });
  }

}
