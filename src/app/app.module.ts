import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { ExemploUmComponent } from './exemplo-um/exemplo-um.component';
import { ExemploDoisComponent } from './exemplo-dois/exemplo-dois.component';
import { ExemploTresComponent } from './exemplo-tres/exemplo-tres.component';
import { ExemploFinalComponent } from './exemplo-final/exemplo-final.component';


@NgModule({
  declarations: [
    AppComponent,
	ExemploUmComponent,
	ExemploDoisComponent,
	ExemploTresComponent,
	ExemploFinalComponent,
  ],
  imports: [
    BrowserModule,
	ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
