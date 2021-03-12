import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as PAGES from './pages';

const routes: Routes = [
  { path: '', component: PAGES.OverviewPageComponent },
  { path: ':name', component: PAGES.DetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
