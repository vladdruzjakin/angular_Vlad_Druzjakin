import { Component, OnInit } from '@angular/core';
import { Service } from '../../service';

@Component({
  selector: 'app-gallery-block',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GaleryComponent implements OnInit {
  public arrayDataCards;
  public urlImg;
  constructor(private service: Service) { }
  imgCkick(event) {
    this.urlImg = event.path[0].currentSrc;
    const popup = document.getElementsByClassName('popupImage');
    if (popup) {
      popup[0].classList.toggle('d-none');
    }
  }
  close() {
    const popup = document.getElementsByClassName('popupImage');
    if (popup) {
      popup[0].classList.toggle('d-none');
    }
  }
  like(event) {
    event.path[1].lastElementChild.innerText = Number(event.path[1].lastElementChild.innerText) + 1;
  }
  ngOnInit(): void {
    this.service.arrayData.subscribe((val) => {
      this.arrayDataCards = val;
      console.log(this.arrayDataCards);
    });
  }

}
