import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { PokeApiService } from '../services/PokeApi.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pokemon-top-bar',
  templateUrl: './pokemon-top-bar.component.html',
  styleUrls: ['./pokemon-top-bar.component.css']
})
export class PokemonTopBarComponent implements OnInit {

  @Output() typeSelected = new EventEmitter<any>();
  @Output() searchValue = new EventEmitter<any>();
  selected = '';
  searchVal = new FormControl();
  typeUrl = 'https://pokeapi.co/api/v2/type/';
  typeList;

  constructor(
    private pokeApiService: PokeApiService,
    ) { }

  ngOnInit() {
    this.pokeApiService.setUrl(this.typeUrl);
    this.pokeApiService.getPokeApiResults().subscribe(response => {
      this.typeList = response;
    });
  }

  setType() {
    this.typeSelected.emit(this.selected);
  }

  onAmtChange() {
    this.searchValue.emit(this.searchVal.value);
  }

}
