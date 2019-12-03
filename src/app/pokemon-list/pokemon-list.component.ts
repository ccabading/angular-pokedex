import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { PokemonService } from '../services/Pokemon.service';

import { Pokemon } from '../../Pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[];

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {

  }

}
