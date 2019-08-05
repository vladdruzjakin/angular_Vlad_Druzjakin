import { Component, OnInit } from '@angular/core';
import { Service } from './service';

@Component({

    // tslint:disable-next-line: component-selector
    selector: 'date-input-component',
    template: '<h1>{{date}}</h1>'

})
export class DateComponent implements OnInit {

    public date = new Date();

    constructor(private service: Service) { }

    ngOnInit(): void {
        setInterval(() => {
            this.date = new Date();
            this.service.Date = this.date;
        }, 1000);

    }
}

