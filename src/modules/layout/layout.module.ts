import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Components } from './components';

@NgModule({
  declarations: [
    Components,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    Components,
  ],
  providers: [],
})
export class LayoutModule { }
