import {Component, EventEmitter, Output} from '@angular/core';


@Component({
    selector: 'app-plus-minus-button',
    templateUrl: './plus-minus-button.component.html',
    styleUrls: ['./plus-minus-button.component.scss']
})
export class PlusMinusButtonComponent  {
    @Output() countChanged = new EventEmitter<number>();
    count=0;
    constructor(){
        this.count=0;
    }
    plus(){
        this.count++;
        this.countChanged.emit(this.count);
    }
    minus(){
        if(this.count>=1){
            this.count--;
            this.countChanged.emit(this.count);
        }
    }
}
