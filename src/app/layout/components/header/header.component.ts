import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {SessionStorage} from 'ngx-webstorage';
import {DataService} from '../../../shared/services/data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    @Output() sidebarToggled=new EventEmitter<boolean>();
    constructor( public router: Router,public dataService:DataService) {

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);

    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
        if(this.isToggled()){
            this.sidebarToggled.emit(true);
        }else {
            this.sidebarToggled.emit(false);
        }
    }

    back(){
        this.dataService.backStack.shift()
        this.router.navigate([this.dataService.backStack.shift().url]);
    }
}
