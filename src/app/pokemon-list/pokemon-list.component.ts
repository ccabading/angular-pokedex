import { Component, OnInit, HostListener } from '@angular/core';
import { Injectable } from '@angular/core';
import { PokeApiService } from '../services/PokeApi.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  apiResponse;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit() {
    this.getPokeApiResults();
  }

  changeResults(nextUrl: string) {
    this.pokeApiService.setUrl(nextUrl);
    this.getPokeApiResults();
  }

  getPokeApiResults() {
    this.pokeApiService.getPokeApiResults().subscribe(response => {
      this.apiResponse = response;
      console.log(this.apiResponse);
    });
  }

  loadContent() {

  }

  showPokemonDetails(event) {
    alert('hey');
  }

}
