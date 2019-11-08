import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/services/data.service';
import {Router} from '@angular/router';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-support',
    templateUrl: './support.component.html',
    styleUrls: ['./support.component.scss'],
    animations: [routerTransition()]
})
export class SupportComponent implements OnInit {
    constructor( private dataService:DataService,private router:Router) {
        this.dataService.backStack.unshift({url:this.router.url,name:'پشتیبانی'});
    }
    ngOnInit() {}
}
