import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FtenFrameworkModule } from 'ften-framework';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FtenFrameworkModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
