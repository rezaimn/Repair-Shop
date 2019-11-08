import {Component, EventEmitter, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../shared/services/authentication.service';

import {LocalStorage, SessionStorage} from 'ngx-webstorage';
import {HttpService} from '../../shared/services/http.service';
import {timeout} from 'rxjs/operators';
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs';
import {DataService} from '../../shared/services/data.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {GetLocationService} from '../../shared/services/get-location.service';
import {BsModalRef} from 'ngx-bootstrap';
import {PersianNumberConverterService} from '../../shared/services/persian-number-converter.service';

declare const google: any;

/**
 * this component is for handling verify-code-request related tasks
 */
@Component({
    selector: 'app-verify-code-request',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    rules: any;
    activationCode = '';
    modalRef: BsModalRef;
    /**
     * @ignore
     */
    shopName;

    privacyCheck = false;
    timer = 60;
    /**
     * the stored isLoggedIn variable in sessionStorage as an boolean
     */
    @LocalStorage('isLoggedIn') isLoggedIn;
    /**
     * the stored token in sessionStorage
     */
    @LocalStorage('token') token;
    /**
     * the stored refreshToken in sessionStorage
     */
    @LocalStorage('refreshToken') refreshToken;
    /**
     *  the stored userPermissions in sessionStorage
     */
    @SessionStorage('userPermissions')
    public userPermissions;
    /**
     * accountData stored in sessionStorage
     */
    @SessionStorage('accountData')
    accountData;

    @SessionStorage('firstLogin')
    firstLogin;
    @SessionStorage('phoneNumber')
    phoneNumber;
    addressChangeDetector = new EventEmitter<string>();
    closeResult: string;
    lat = 0;
    lng = 0;
    marker = {
        label: '',
        lat: 0,
        lng: 0,
        draggable: true
    };
    address = '';
    zoom = 12;
    enableAddressBox = false;

    mapClicked(event: any) {
        this.marker = {
            label: '',
            lat: event.coords.lat,
            lng: event.coords.lng,
            draggable: true
        };
        this.enableAddressBox = true;
    }

    /**
     * @ignore
     */
    constructor(
        private persianNumberConverter: PersianNumberConverterService,
        public router: Router,
        private getLocationService: GetLocationService,
        private modalService: NgbModal,
        private dataService: DataService,
        private httpService: HttpService,
        private authService: AuthenticationService) {

        this.getLocationService.getPosition().then(position => {
            // @ts-ignore
            const coords = position.coords;
            this.lng = coords.longitude;
            this.lat = coords.latitude;
            this.marker.lat = this.lat;
            this.marker.lng = this.lng;

        });

    }

    /**
     * @ignore
     */
    ngOnInit() {
        this.startTimeOut();
        this.addressChangeDetector.subscribe(
            (address => {
                this.address = address;
            })
        );
    }

    getRules() {
        this.httpService.get(`core/regulation/repair_shop/`).subscribe(
            result => {
                this.rules = result;
            }
        );
    }

    acceptRules() {
        this.privacyCheck = true;
        this.close();
    }

    cancelRules() {
        this.privacyCheck = false;
    }

    getAddressFromLatLng(lat, lng) {
        const that = this;
        navigator.geolocation.getCurrentPosition(
            function (position) {
                if (navigator.geolocation) {
                    const geocoder = new google.maps.Geocoder();
                    const latlng = new google.maps.LatLng(lat, lng);
                    const request = {
                        latLng: latlng
                    };
                    geocoder.geocode(request, (results, status) => {
                            if (status === google.maps.GeocoderStatus.OK) {
                                const rawAddress = results[0].formatted_address;
                                const addressArray = rawAddress.split('،');
                                let addressTemp = '';
                                for (let i = 1; i < addressArray.length - 1; i++) {
                                    addressTemp = addressTemp + addressArray[i] + '، ';
                                }
                                that.addressChangeDetector.emit(addressTemp);
                            }
                        }
                    );
                }
            });
    }

    selectAddress() {
        this.lat = this.marker.lat;
        this.lng = this.marker.lng;
        this.getAddressFromLatLng(this.lat, this.lng);
        this.close();
    }

    /**
     * This Method is for calling verify-code-request API and Saving the result (Token and refreshToken) in session storage.
     */

    startTimeOut() {
        const timeoutVar: any = Observable.interval(1000).subscribe(() => {
            this.timer--;
            if (this.timer === 0) {
                timeoutVar.unsubscribe();
            }
        });
    }

    onLogin() {
        const body = {
            phone: this.persianNumberConverter.convertPersianNumToEnglish(this.phoneNumber),
            verify_code: this.persianNumberConverter.convertPersianNumToEnglish(this.activationCode),
            fullname: this.shopName,
            user_type: 'repair_shop',
            location: {
                latitude: this.lat,
                longitude: this.lng
            },
            address: this.address,
            uuid: 'pid_' + Math.random().toString()
        };
        if (this.firstLogin === true) {

            this.authService.register('register/', body).subscribe(
                (res => {
                    this.isLoggedIn = true;
                    this.token = res.result.token;
                    this.router.navigate(['/dashboard/landing-page']);
                })
            );
        } else {
            delete body.fullname;
            delete body.address;
            delete body.location;
            this.authService.login('login/', body).subscribe(
                (res => {
                    this.isLoggedIn = true;
                    this.token = res.result.token;
                    this.router.navigate(['/dashboard/landing-page']);
                })
            );
        }


    }

    sendVerifyCode() {
        const body = {
            phone: this.persianNumberConverter.convertPersianNumToEnglish(this.phoneNumber),
            user_type: 'repair_shop',
            uuid: Math.random().toString()
        };
        this.authService.getValidationCode('validate_phone/', body).subscribe(
            (res => {
                this.timer = 60;
                this.startTimeOut();
                this.firstLogin = res.result['first login'];
                this.router.navigate(['/auth/login']);
            })
        );
    }

    markerDragEnd(event: any) {
        this.marker = {
            label: '',
            lat: event.coords.lat,
            lng: event.coords.lng,
            draggable: true
        };
        this.getAddressFromLatLng(this.marker.lat, this.marker.lng);
        this.enableAddressBox = true;
    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    close() {
        this.modalService.dismissAll();
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
