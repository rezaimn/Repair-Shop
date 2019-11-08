import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../../router.animations';
import {DataService} from '../../../../shared/services/data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    animations: [routerTransition()]
})
export class ProductsComponent implements OnInit {
    search;

    constructor(private dataService: DataService, private router: Router) {
        this.dataService.backStack.unshift({url:this.router.url,name:'محصولات'});
    }

    ngOnInit() {
    }
}
