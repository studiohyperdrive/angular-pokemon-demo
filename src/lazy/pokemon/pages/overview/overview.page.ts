import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { IPokemon } from '../../services/pokemon/pokemon.types';

@Component({
  templateUrl: './overview.page.html',
})
export class OverviewPageComponent implements OnInit {
  public pokemon$: Observable<IPokemon[]>;

  constructor(
    private pokemonService: PokemonService,
  ) { }

  public ngOnInit(): void {
    this.pokemon$ = this.pokemonService.fetchList();
  }
}
