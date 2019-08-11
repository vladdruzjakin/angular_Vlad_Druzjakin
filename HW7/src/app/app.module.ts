import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MorzeComponent } from './morze/morze.component';
import { DateComponent } from './date/date.component';
import { DateVariebles } from './dateVariebles'
import { MorzePipe} from './morze.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MorzeComponent,
    DateComponent,
    MorzePipe,
    DateVariebles
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
