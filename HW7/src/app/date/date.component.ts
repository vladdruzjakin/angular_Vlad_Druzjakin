import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  public date
  public dateVar1($event) {
    this.date = new Date($event.year, $event.mouth, $event.day);
  }

}
