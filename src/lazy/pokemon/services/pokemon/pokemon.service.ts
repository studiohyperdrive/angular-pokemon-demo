import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPokemon, IPokemonDetailResponse, IPokemonListResponse } from './pokemon.types';

@Injectable()
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public fetchList(): Observable<IPokemon[]> {
    return this.httpClient.get(`${this.baseUrl}/pokemon`)
      .pipe(
        // Format API response
        map((response: IPokemonListResponse) => {
          return (response?.results || []).map((result) => {
            return {
              name: result.name,
            };
          });
        }),
      );
  }

  public fetchDetail(name: string): Observable<IPokemon> {
    return this.httpClient.get(`${this.baseUrl}/pokemon/${name}`)
      .pipe(
        // Format API response
        map((response: IPokemonDetailResponse) => {
          return {
            name: response.name,
            height: response.height,
            id: response.id,
            moves: (response?.moves || []).map((move) => {
              return move?.move?.name;
            }),
            order: response.order,
            types: (response?.types || []).map((type) => {
              return type?.type?.name;
            }),
            weight: response.weight,
            sprite: response.sprites.front_default,
          };
        }),
      );
  }
}
