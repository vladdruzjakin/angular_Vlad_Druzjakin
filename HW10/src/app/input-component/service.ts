import { EventEmitter } from '@angular/core';

export class Service {
    public dateImg = new EventEmitter();

    set Date(value) {
        this.dateImg.emit(value);
    }
}
