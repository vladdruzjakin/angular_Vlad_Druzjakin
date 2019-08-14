import { Component } from '@angular/core';
import { Service } from '../../service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'input-component',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})

export class InputComponent {

    constructor(private service: Service) { }

    public nameCard = '';
    public urlCard = '';
    public tagsCard = '';
    public urlData;
    public cardData = [];

    public file() {
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.urlData = reader.result;
            console.log(this.urlData);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    public handler(): void {
        if (this.nameCard === '') { this.nameCard = ''; this.urlCard = ''; this.tagsCard = ''; return; }
        if (this.urlCard === '' && this.urlData === '') { this.nameCard = ''; this.urlCard = ''; this.tagsCard = ''; return; }
        if (this.tagsCard === '') { this.nameCard = ''; this.urlCard = ''; this.tagsCard = ''; return; }
        const objectCard = {
            name: this.nameCard,
            url: this.urlCard,
            tags: this.tagsCard,
            urlData: this.urlData
        };
        this.cardData.push(objectCard);

        this.service.Data = this.cardData;

        setTimeout(() => {
            this.nameCard = '';
            this.urlCard = '';
            this.tagsCard = '';
        }, 500);
    }
}
