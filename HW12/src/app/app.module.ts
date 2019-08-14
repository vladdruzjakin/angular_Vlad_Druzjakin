import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './main/component/input/input.component';
import { GaleryComponent } from './main/component/gallery/gallery.component';
import { Service } from './main/service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    GaleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

