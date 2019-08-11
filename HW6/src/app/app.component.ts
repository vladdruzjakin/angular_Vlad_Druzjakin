import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="wrapper">
    <h2>Задание 1</h2>
    <div class="inputImgUrl">
      <input type='text' [(ngModel)]='srcImg'/>
    </div>
    <div class="picture">
      <img src={{srcImg}} alt="img">
    </div>
    <app-selected-picture></app-selected-picture>
    <app-gallary></app-gallary>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public srcImg: string = "http://co14.nevseoboi.com.ua/189/18819/1417188244-6075204-www.nevseoboi.com.ua.jpg"
}
