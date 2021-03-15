import { Component, Input } from '@angular/core';

import { IPokemon } from '../../services/pokemon/pokemon.types';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent {
  @Input() public pokemon: IPokemon[] = [];
}
