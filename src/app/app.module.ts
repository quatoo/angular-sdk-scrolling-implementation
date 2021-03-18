import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { ExemploUmComponent } from './exemplo-um/exemplo-um.component';

@NgModule({
  declarations: [
    AppComponent,
	ExemploUmComponent,
  ],
  imports: [
    BrowserModule,
	ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
