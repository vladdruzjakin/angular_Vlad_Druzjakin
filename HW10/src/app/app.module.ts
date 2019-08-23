import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { DateComponent } from './input-component/date.component';
import { Service } from './input-component/service';

@NgModule({
  declarations: [AppComponent, InputComponentComponent, DateComponent],
  imports: [BrowserModule, FormsModule],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
