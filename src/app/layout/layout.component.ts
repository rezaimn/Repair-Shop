import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/services/data.service';
import {EventEmitterService} from '../shared/services/event-emitter.service';
import {interval} from 'rxjs';
import {HttpService} from '../shared/services/http.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    loading = false;
    requestListInterval;
    collapedSideBar: boolean;
    sidebarIsOpen: boolean;
    pushRightClass = 'push-right';

    constructor(
        private httpService: HttpService,
        public dataService: DataService, private eventEmitterService: EventEmitterService) {
        this.eventEmitterService.loading.subscribe(
            (result => {
                this.loading = result;
            })
        );
    }

    ngOnInit() {
        this.dataService.currentRequestList.new_orders = JSON.parse(localStorage.getItem('new_requests')) || [];
        this.dataService.currentRequestList.attended_orders = JSON.parse(localStorage.getItem('pending_requests')) || [];
        this.dataService.currentRequestList.new_orders = JSON.parse(localStorage.getItem('accepted_requests')) || [];
        this.getRequestsCount();
        if (this.requestListInterval) {
            this.requestListInterval.unsubscribe();
        }
        this.requestListInterval = interval(5000).subscribe(
            val => {
                this.getRequestsCount();
            }
        );
    }

    getRequestsCount() {
        this.httpService.intervalGet('/orders/shop/shop/small/').subscribe(
            (result => {
                this.dataService.newRequestCount = result.new_orders.filter(item => this.dataService.currentRequestList.new_orders.indexOf(item) < 0).length;
                this.dataService.pendingRequestCount = result.attended_orders.filter(item => this.dataService.currentRequestList.attended_orders.indexOf(item) < 0).length;
                this.dataService.acceptedRequestCount = result.attending_orders.filter(item => this.dataService.currentRequestList.attending_orders.indexOf(item) < 0).length;
                this.dataService.newRequestList = result;

            })
        );
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }

    sidebarIsOpened($event) {
        this.sidebarIsOpen = $event;
    }

    closeSidebar() {
        const dom: Element = document.querySelector('body');
        if (dom.classList.contains(this.pushRightClass)) {
            dom.classList.toggle(this.pushRightClass);
            this.sidebarIsOpen = false;
        }
    }
}
