import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { ExemploUmComponent } from './exemplo-um/exemplo-um.component';
import { ExemploDoisComponent } from './exemplo-dois/exemplo-dois.component';

@NgModule({
  declarations: [
    AppComponent,
	ExemploUmComponent,
	ExemploDoisComponent,
  ],
  imports: [
    BrowserModule,
	ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
