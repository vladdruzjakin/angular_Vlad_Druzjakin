import { Component, Output, EventEmitter, OnInit } from '@angular/core'

@Component({
    selector: 'dateVar',
    template: ``
})
export class DateVariebles implements OnInit {

    dateVar = { year: 2019, mouth: 2, day: 30 }
    @Output()
    event = new EventEmitter();
    ngOnInit(): void {
        this.event.emit(this.dateVar)
    }
}