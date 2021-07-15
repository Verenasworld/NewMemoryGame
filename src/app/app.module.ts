import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CountdownComponent } from './counter/countdown/countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
