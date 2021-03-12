import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { IPokemon } from '../../services/pokemon/pokemon.types';

@Component({
  templateUrl: './detail.page.html',
  // styleUrls: ['./overview.page.scss'],
})
export class DetailPageComponent implements OnInit {
  public pokemon$: Observable<IPokemon>;

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    const name = this.activatedRoute.snapshot.params.name;
    this.pokemon$ = this.pokemonService.fetchDetail(name);
  }
}
