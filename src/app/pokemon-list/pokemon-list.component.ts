import { Component, OnInit, HostListener, Input, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

import { PokeApiService } from '../services/PokeApi.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Input() typesUrl: any;
  @Input() searchInput: any;
  prevTypesUrl = '';
  count = 20;
  index = 0;
  max = 0;
  hasMaxed = false;
  apiUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964';
  pokemonList;
  pokemonTypeList;
  prevDisabled: boolean;
  nextDisabled: boolean;

  constructor(
    private pokeApiService: PokeApiService,
  ) { }

  ngOnInit() {
    this.getDefaultResults();
    this.prevDisabled = true;
    this.nextDisabled = false;
  }

  prevResults() {
    window.scrollTo(0, 0);
    this.nextDisabled = false;
    this.index -= this.count;
    if (this.index === 0) {
      this.prevDisabled = true;
    }
    if (this.hasMaxed) {
      this.hasMaxed = false;
    }
  }

  nextResults() {
    window.scrollTo(0, 0);
    this.prevDisabled = false;
    this.index += this.count;
    if (this.index + this.count > this.max) {
      this.nextDisabled = true;
      this.hasMaxed = true;
    }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges() {
    this.index = 0;
    this.prevDisabled = true;
    this.nextDisabled = false;

    if (this.prevTypesUrl !== this.typesUrl) {
      if (this.typesUrl !== undefined) {
        if (this.typesUrl === '') {
          this.getDefaultResults();
        } else {
          this.pokeApiService.setUrl(this.typesUrl);
          this.pokeApiService.getPokeApiTypes().subscribe(response => {
            this.pokemonTypeList = response;
            this.max = this.pokemonTypeList.pokemon.length;
          });
        }
      }
      this.prevTypesUrl = this.typesUrl;
    }
  }

  getDefaultResults() {
    this.pokeApiService.setUrl(this.apiUrl);
    this.pokeApiService.getPokeApiResults().subscribe(response => {
      this.pokemonList = response;
      this.max = this.pokemonList.results.length;
    });
  }

}
