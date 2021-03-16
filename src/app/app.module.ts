import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from 'src/modules/layout/layout.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pages } from './pages';

@NgModule({
  declarations: [
    AppComponent,
    Pages,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
