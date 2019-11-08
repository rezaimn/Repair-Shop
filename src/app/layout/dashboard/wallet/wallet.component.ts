import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {DataService} from '../../../shared/services/data.service';
import {Router} from '@angular/router';
import {HttpService} from '../../../shared/services/http.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PersianNumberConverterService} from '../../../shared/services/persian-number-converter.service';

@Component({
    selector: 'app-wallet',
    templateUrl: './wallet.component.html',
    styleUrls: ['./wallet.component.scss'],
    animations: [routerTransition()]
})
export class WalletComponent implements OnInit {
    closeResult: string;
    charge_amount;
    balance = 0;
    transactions = [];

    constructor(
        private persianNumberConverter: PersianNumberConverterService,
        private httpService: HttpService,
        private dataService: DataService,
        private router: Router,
        private modalService: NgbModal
    ) {
        this.dataService.backStack.unshift({url: this.router.url, name: 'کیف پول'});
    }

    ngOnInit() {
        this.getBalance();
        this.getTransactions();
    }

    getBalance() {
        this.httpService.get('wallet/wallet_inventory/').subscribe(
            (res => {
                this.balance = res.result.amount;
            })
        );
    }

    getTransactions() {
        this.httpService.get('wallet/shop/').subscribe(
            (res => {
                this.transactions = res.data;
            })
        );
    }

    chargeWallet() {

        const body = {
            requested_amount:  this.persianNumberConverter.convertPersianNumToEnglish(this.charge_amount) || 0,
            device: 2
        };
        this.httpService.post('wallet/request/', body).subscribe(
            (res => {
                this.close();
                const downloadLink = document.createElement('a');
                downloadLink.title = 'صفحه پرداخت';
                downloadLink.href = res.result.pay_url;
                // downloadLink.target='_blank';
                downloadLink.click();
            })
        );
    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.charge_amount = null;
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    close() {
        this.modalService.dismissAll();
        this.charge_amount = null;
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
