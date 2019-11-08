import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {Router} from '@angular/router';
import {DataService} from '../../../shared/services/data.service';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss'],
    animations: [routerTransition()]
})
export class ShopComponent implements OnInit {
    search;

    constructor(private router: Router, private dataService: DataService) {
        this.dataService.backStack.unshift({url:this.router.url,name:'فروشگاه'});
    }

    ngOnInit() {
    }

    showProducts(id) {
        this.router.navigate(['/dashboard/products/' + id]);
    }
}
