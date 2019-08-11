import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-morze',
  template: `<div class="morze_block">
  <h2>Морзе</h2>
  <input id='morzeId' type="text" [(ngModel)]='message'/>
  <p>{{message|Morze}}</p>
  </div>`
  ,
  styleUrls: ['./morze.component.css']
})
export class MorzeComponent implements OnInit {
public message =''
  ngOnInit() {
  }

}
