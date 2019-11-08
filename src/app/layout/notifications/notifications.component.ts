import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {DataService} from '../../shared/services/data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-shopping-basket',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss'],
    animations: [routerTransition()]
})
export class NotificationsComponent implements OnInit {
    constructor( private dataService:DataService,private router:Router) {
        this.dataService.backStack.unshift({url:this.router.url,name:'اعلانات'});
    }

    ngOnInit() {}

}
