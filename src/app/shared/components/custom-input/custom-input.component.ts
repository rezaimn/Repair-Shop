import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
    selector: 'app-custom-input',
    templateUrl: './custom-input.component.html',
    styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent  {
    @Output() textChanged = new EventEmitter<number>();
    @Input() placeholder='';
    @Input() title='';
    @Input() icon='';
    @Input() value='';
    @Input() type='text';
    @Input() disabled=false;
    setChanges(event){
        this.textChanged.emit(event.target.value);
    }
}
