import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
    selector: 'app-custom-select',
    templateUrl: './custom-select.component.html',
    styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent  {
    @Output() textChanged = new EventEmitter<number>();
    @Input() placeholder='';
    @Input() title='';
    @Input() icon='';
    @Input() selectedId=-1;
    @Input() firstOption='';
    @Input() options=[];
    setChanges(event){
        this.textChanged.emit(this.options[event]);
    }
    constructor(){

    }
}
