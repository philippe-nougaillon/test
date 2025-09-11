import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';

@Injectable({
    providedIn: 'root'
})
export class ToastService extends Notyf {
    constructor() {
        super({
            position: {
                x: 'center',
                y: 'top',
            }
        })
    }
}