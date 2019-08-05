import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { IncrementComponent } from './components/increment/increment.component';
import { DecrementComponent } from './components/decrement/decrement.component';
import { ResetCountComponent } from './components/resetCount/resetCount.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    IncrementComponent,
    DecrementComponent,
    ResetCountComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
