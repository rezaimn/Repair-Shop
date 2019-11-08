import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { DataService } from '../../../shared/services/data.service';
import { Router } from '@angular/router';
import { HttpService } from '../../../shared/services/http.service';
import { environment } from '../../../../environments/environment';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-in-process',
    templateUrl: './in-process.component.html',
    styleUrls: ['./in-process.component.scss'],
    animations: [routerTransition()]
})
export class InProcessComponent implements OnInit {
    cancelReasons = ['داشتم تست میکردم', 'کالای مورد نظرم رو نداشتید', 'برام کاری پیش اومده لطفا زمان سرویس عوض بشه', 'سایر موارد'];
    showInput = false;
    timeMap = [' 9 تا 12', ' 12 تا 15', ' 15 تا 18', ' 18 تا 21'];
    inProcessList = [];
    environment = environment;
    closeResult;
    finishingCode = 0;
    selectedTaskId = 0;
    description = '';
    constructor(
        private dataService: DataService,
        private router: Router,
        private modalService: NgbModal,
        private httpService: HttpService
    ) {
        this.dataService.backStack.unshift({ url: this.router.url, name: 'در دست اقدام' });
    }
    ngOnInit() {
        this.getInProcessRequests();
        this.dataService.currentRequestList.attending_orders = [...this.dataService.newRequestList.attending_orders];
        localStorage.setItem('accepted_requests', JSON.stringify(this.dataService.newRequestList.attending_orders ));
        this.dataService.acceptedRequestCount = 0;
    }

    getInProcessRequests() {
        this.httpService.get('orders/shop/shop/?status=2').subscribe(res => {
            this.inProcessList = res.data;
        });
    }
    setInProcessStatus(status) {
        let body = {
            status: status,
            code: this.finishingCode,
            description: this.description
        };

        this.httpService.patch(`orders/shop/status/${this.selectedTaskId}/`, body).subscribe(res => {
            this.close();
            this.getInProcessRequests();
        });
    }
    setSelectedId(id) {
        this.selectedTaskId = id;
    }
    open(content) {
        this.modalService.open(content).result.then(
            result => {
                this.closeResult = `Closed with: ${result}`;
            },
            reason => {
                this.showInput = false;
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
        );
    }
    close() {
        this.finishingCode = 0;
        this.description = '';
        this.showInput = false;
        this.modalService.dismissAll();
    }
    private getDismissReason(reason: any): string {
        this.finishingCode = 0;
        this.description = '';
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
