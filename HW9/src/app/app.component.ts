import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-decrement></app-decrement>
    <app-counter></app-counter>
    <app-increment></app-increment>
    <app-reset></app-reset>
  `
})
export class AppComponent {
  title = 'app';
}
