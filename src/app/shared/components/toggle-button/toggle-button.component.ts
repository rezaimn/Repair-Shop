import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
    selector: 'app-toggle-button',
    templateUrl: './toggle-button.component.html',
    styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent  {
    @Output() changed = new EventEmitter<boolean>();
    @Input() id=0;
    @Input() okText='OK';
    @Input() status=true;
    @Input() disabled=false;
}
