import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SelectedPictureComponent } from './selected-picture/selected-picture.component';
import { GallaryComponent } from './gallary/gallary.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectedPictureComponent,
    GallaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
