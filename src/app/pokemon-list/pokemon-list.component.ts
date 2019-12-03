import { Component, OnInit, HostListener } from '@angular/core';
import { Injectable } from '@angular/core';
import { PokeApiService } from '../services/PokeApi.service';

import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  response;

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // you're at the bottom of the page
      this.pokeApiService.setUrl(this.response.next);
      this.getResponse();
    }
}

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
      console.log(this.response);
    });
  }

}
