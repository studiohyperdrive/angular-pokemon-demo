import { Component, Input } from '@angular/core';

import { IPokemon } from '../../services/pokemon/pokemon.types';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
})
export class PokemonCardComponent {
  @Input() public pokemon: IPokemon;
}
