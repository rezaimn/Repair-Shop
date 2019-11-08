import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {LabelType, Options} from 'ng5-slider';
import {DataService} from '../../../shared/services/data.service';
import {Router} from '@angular/router';
import {HttpService} from '../../../shared/services/http.service';
import {environment} from '../../../../environments/environment';
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-requests',
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.scss'],
    animations: [routerTransition()]
})
export class RequestsComponent implements OnInit {
    cancelReasons = ['داشتم تست میکردم', 'کالای مورد نظرم رو نداشتید', 'برام کاری پیش اومده لطفا زمان سرویس عوض بشه', 'سایر موارد'];
    selectedTaskId = 0;
    finishingCode = 0;
    description = '';
    showInput: boolean;
    environment = environment;
    checkedServicesCount = 0;
    timeMap = [' 9 تا 12', ' 12 تا 15', ' 15 تا 18', ' 18 تا 21'];
    requestsList: any[] = [];
    options: Options = {
        floor: -15,
        ceil: 20,
        step: 5,
        showTicks: true,
        translate: (value: number, label: LabelType): string => {
            switch (label) {
                case LabelType.Low:
                    return value + '%';
                case LabelType.High:
                    return value + '%';
                default:
                    return value + '%';
            }
        }
    };

    constructor(
        public dataService: DataService,
        private router: Router,
        private httpService: HttpService,
        private modalService: NgbModal
    ) {
        this.dataService.backStack.unshift({url: this.router.url, name: 'درخواست ها'});
    }

    ngOnInit() {
        this.getWaitingForAcceptRequests();
        this.dataService.currentRequestList.new_orders = [...this.dataService.newRequestList.new_orders];
        this.dataService.currentRequestList.attended_orders = [...this.dataService.newRequestList.attended_orders];
        localStorage.setItem('new_requests', JSON.stringify(this.dataService.newRequestList.new_orders ));
        localStorage.setItem('pending_requests', JSON.stringify(this.dataService.newRequestList.attended_orders ));
        this.dataService.newRequestCount = 0;
        this.dataService.pendingRequestCount = 0;
    }


    getWaitingForAcceptRequests() {
        this.requestsList = [];
        this.httpService.get('orders/shop/shop/?status=1').subscribe(res => {
            for (let i = 0; i < res.data.length; i++) {
                res.data[i].pack.checkedServicesCount = 0;
                res.data[i].pack.checkedProductsCount = 0;
                res.data[i].pack.repairShopPercent = 0;
                this.requestsList.push(res.data[i]);
            }
            this.getAvailableRequests();
        });
    }

    getAvailableRequests() {
        this.httpService.get('orders/shop/shop/?status=0').subscribe(res => {
            for (let i = 0; i < res.data.length; i++) {
                res.data[i].pack.checkedServicesCount = 0;
                res.data[i].pack.checkedProductsCount = 0;
                res.data[i].pack.repairShopPercent = 0;
                this.requestsList.push(res.data[i]);
                this.startTimer(res.data[i].until, this.requestsList.length - 1);
            }
        });
    }

    startTimer(until, index) {
        let seconds = Math.floor((new Date(until).getTime() - new Date().getTime()) / 1000);
        const timeout: any = Observable.interval(1000).subscribe(() => {
            seconds--;
            if (seconds === 0 || !this.requestsList[index]) {
                timeout.unsubscribe();
            }
            if (this.requestsList[index]) {
                this.requestsList[index].timer = seconds;
            }
        });
    }

    checkServices(event, i, j) {
        if (event) {
            this.requestsList[i].pack.checkedServicesCount++;
        } else {
            this.requestsList[i].pack.checkedServicesCount--;
        }
        this.requestsList[i].pack.services[j].checked = event;
    }

    checkProducts(event, i, j) {
        if (event) {
            this.requestsList[i].pack.checkedProductsCount++;
        } else {
            this.requestsList[i].pack.checkedProductsCount--;
        }
        this.requestsList[i].pack.products[j].product.checked = event;
    }

    acceptRequest(id, percentage) {
        const body = {
            percent: percentage
        };
        this.httpService.post('orders/shop/shop/' + id + '/', body).subscribe(res => {
            this.getWaitingForAcceptRequests();
        });
    }

    dismissRequest(status) {
        const body = {
            reject_cause: this.description
        };
        this.httpService.post('orders/shop/shop/' + this.selectedTaskId + '/', body).subscribe(res => {
            this.getWaitingForAcceptRequests();
        });
    }

    setSelectedId(id) {
        this.selectedTaskId = id;
    }

    close() {
        this.finishingCode = 0;
        this.description = '';
        this.showInput = false;
        this.modalService.dismissAll();
    }

    open(content) {
        this.modalService.open(content).result.then(
            result => {
                // this.closeResult = `Closed with: ${result}`;
            },
            reason => {
                this.showInput = false;
                // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
        );
    }
}
