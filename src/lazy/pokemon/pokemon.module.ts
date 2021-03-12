import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { Components } from './components';
import { Pages } from './pages';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { Services } from './services';

@NgModule({
  declarations: [
    Components,
    Pages,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PokemonRoutingModule,
  ],
  providers: [
    Services,
  ],
})
export class PokemonModule { }
