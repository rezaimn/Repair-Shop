import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {BsModalService} from 'ngx-bootstrap';
import {AlertMessageService} from '../../../shared/services/alert-message.service';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {HttpService} from '../../../shared/services/http.service';
import {DataService} from '../../../shared/services/data.service';
import {interval} from 'rxjs';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    animations: [routerTransition()]
})
export class LandingPageComponent implements OnInit {
    environment = environment;

    customOptions: OwlOptions = {
        loop: true,
        autoplay: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        margin: 10,
        items: 1,
        nav: false,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            740: {
                items: 1
            },
            940: {
                items: 1
            }
        }
    };
    public imageSources: any[] = [];
    inProcessCount: any;
    requestsCount: any;

    constructor(
        private modalService: BsModalService,
        private httpService: HttpService,
        private router: Router,
        public dataService: DataService,
        private alertMessageService: AlertMessageService
    ) {
        this.dataService.backStack.unshift({url: this.router.url, name: 'هپی کار'});
        this.getSliderData();
    }



    ngOnInit() {

        this.getOrdersStatus();
    }

    getOrdersStatus() {
        this.httpService.get('orders/shop/shop/?status=2').subscribe(res => {
            this.inProcessCount = res.count;
        });
        this.httpService.get('orders/shop/shop/?status=0').subscribe(res => {
            this.requestsCount = res.count;
        });
    }

    getSliderData() {
        this.httpService.get('slider/repair_shop/').subscribe(res => {
            this.imageSources = res.result;
        });
    }


    goToRoute(routeStr) {
        this.router.navigate([routeStr]);
    }
}
