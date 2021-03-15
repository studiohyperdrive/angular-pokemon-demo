import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IGenerations, IGenerationsListResponse } from './generations.types';

@Injectable()
export class GenerationsService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public fetchList(): Observable<IGenerations[]> {
    return this.httpClient.get(`${this.baseUrl}/generation`)
      .pipe(
        // Format API response
        map((response: IGenerationsListResponse) => {
          return (response?.results || []).map((result) => {
            return {
              name: result.name,
            };
          });
        }),
      );
  }
}
