import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { Components } from './components';
import { GenerationsRoutingModule } from './generations-routing.module';
import { Pages } from './pages';
import { Services } from './services';

@NgModule({
  declarations: [
    Components,
    Pages,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GenerationsRoutingModule,
  ],
  providers: [
    Services,
  ],
})
export class GenerationsModule { }
