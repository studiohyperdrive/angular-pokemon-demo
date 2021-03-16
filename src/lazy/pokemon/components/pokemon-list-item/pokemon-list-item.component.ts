import { Component, Input } from '@angular/core';

import { IPokemon } from '../../services/pokemon/pokemon.types';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent {
  @Input() public pokemon: IPokemon;
}
