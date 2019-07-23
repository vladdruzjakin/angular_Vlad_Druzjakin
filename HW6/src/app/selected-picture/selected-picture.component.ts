import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-selected-picture',
  templateUrl: './selected-picture.component.html',
  styleUrls: ['./selected-picture.component.css']
})
export class SelectedPictureComponent implements OnInit {
  public urlImgclick: string = '';
  ngOnInit() {
    const imgEventlistener = fromEvent(document.querySelector(".pictureGrid"), 'click');
    imgEventlistener.subscribe(
      (event: any) => {
        this.urlImgclick = event.path[0].currentSrc;
      })
  }

}
