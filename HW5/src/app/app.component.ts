import { Component} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <button (click)='clik()' id='btnClick'>Click me!</button>
    <app-gallery></app-gallery>

  `
})
export class AppComponent {
  // public clickEvent = fromEvent(document.getElementById('btnClick'), 'click');
  public count:number = 0;
  public clik(){
    this.count++
    if(this.count===4){
      this.count = 0
      alert('Хватит тыкать сюда')
    }
  }

}
