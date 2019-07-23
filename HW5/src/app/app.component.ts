import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <button id='btnClick'>Click me!</button>
    <app-gallery></app-gallery>
  `
})
export class AppComponent implements OnInit {
  private count: number = 0;

  ngOnInit(): void {
    const clickEvent = fromEvent(document.getElementById('btnClick'), 'click');
    clickEvent.subscribe(
      () => {
        this.count++
        if (this.count === 4) {
          this.count = 0
          alert('Хватит тыкать сюда =)')
        }
      }
    );
  }
}
