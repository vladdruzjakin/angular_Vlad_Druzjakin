import { EventEmitter } from '@angular/core';

export class Service {
    public arrayData = new EventEmitter();

    set Data(value) {
        this.arrayData.emit(value);
    }
}
