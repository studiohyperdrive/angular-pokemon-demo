import { Component, Input } from '@angular/core';

import { IPokemon } from '../../services/pokemon/pokemon.types';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() public pokemon: IPokemon;
}
