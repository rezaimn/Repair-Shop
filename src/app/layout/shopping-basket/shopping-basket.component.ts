import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {DataService} from '../../shared/services/data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-shopping-basket',
    templateUrl: './shopping-basket.component.html',
    styleUrls: ['./shopping-basket.component.scss'],
    animations: [routerTransition()]
})
export class ShoppingBasketComponent implements OnInit {
    constructor( private dataService:DataService,private router:Router) {
        this.dataService.backStack.unshift({url:this.router.url,name:'سبد خرید'});
    }

    ngOnInit() {}
    countChange(event){

    }
}
