import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as PAGES from './pages';

const routes: Routes = [
  { path: '', component: PAGES.OverviewPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerationsRoutingModule { }
