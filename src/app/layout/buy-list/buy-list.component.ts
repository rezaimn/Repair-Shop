import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {DataService} from '../../shared/services/data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-buy-list',
    templateUrl: './buy-list.component.html',
    styleUrls: ['./buy-list.component.scss'],
    animations: [routerTransition()]
})
export class BuyListComponent implements OnInit {
    search;
    constructor( private dataService:DataService,private router:Router) {
        this.dataService.backStack.unshift({url:this.router.url,name:'لیست خرید'});

    }
    ngOnInit() {}
    countChange(event){

    }
}
