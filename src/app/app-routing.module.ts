import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as PAGES from './pages';

const routes: Routes = [
  { path: '', component: PAGES.HomePageComponent },
  { path: 'pokedex', loadChildren: () => import('../lazy/pokemon/pokemon.module').then(m => m.PokemonModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
