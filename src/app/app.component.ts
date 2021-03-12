import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PokemonService } from './services/pokemon/pokemon.service';
import { IPokemon } from './services/pokemon/pokemon.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public pokemon$: Observable<IPokemon[]>;

  constructor(
    private pokemonService: PokemonService,
  ) { }

  public ngOnInit(): void {
    this.pokemon$ = this.pokemonService.fetchList();
  }
}
