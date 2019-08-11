import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {
  public arrayImg = [];
  public value;
  @Output() event = new EventEmitter();

  addImg() {

    if (~this.value.indexOf('https://')) {
      this.arrayImg.push(this.value);
      this.value = '';
      this.event.emit(this.arrayImg);
    } else {
      this.value = '';
    }

  }
  constructor() { }

  ngOnInit() { }
}
