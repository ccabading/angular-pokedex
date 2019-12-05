import { Component, OnInit, Input } from '@angular/core';
import { PokeApiService } from '../services/PokeApi.service';


@Component({
  selector: 'app-pokemon-card-content',
  templateUrl: './pokemon-card-content.component.html',
  styleUrls: ['./pokemon-card-content.component.css']
})
export class PokemonCardContentComponent implements OnInit {
  @Input() pokemonUrl: string;
  pokemonDetails;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit() {
    this.pokeApiService.setUrl(this.pokemonUrl);
    this.pokeApiService.getPokemonDetails().subscribe(response => {
      this.pokemonDetails = response;
      console.log(this.pokemonDetails);
    });
  }

}
