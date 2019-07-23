import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  public mainPicture: string = 'http://www.winzavod.ru/upload/resize_cache/iblock/6ab/1024_680_2/6ab0a8f93ffdad2559bd935b738f90d2.jpg'
  ngOnInit() {
    const mainPictureEventlistener = fromEvent(document.querySelector(".gallary"), 'click');
    mainPictureEventlistener.subscribe(
      (event: any) => {
        if (event.path[0].currentSrc) {
          this.mainPicture = event.path[0].currentSrc;
        } else {
          this.mainPicture = 'http://www.winzavod.ru/upload/resize_cache/iblock/6ab/1024_680_2/6ab0a8f93ffdad2559bd935b738f90d2.jpg'
        }

      })
  }

}
