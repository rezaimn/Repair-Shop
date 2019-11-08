import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../shared/services/authentication.service';

import {SessionStorage} from 'ngx-webstorage';
import {HttpService} from '../../shared/services/http.service';
import {DataService} from '../../shared/services/data.service';
import {PersianNumberConverterService} from '../../shared/services/persian-number-converter.service';

/**
 * this component is for handling verify-code-request related tasks
 */
@Component({
    selector: 'app-verify-code-request',
    templateUrl: './verify-code-request.component.html',
    styleUrls: ['./verify-code-request.component.scss']
})
export class VerifyCodeRequestComponent implements OnInit {

    phone;

    @SessionStorage('firstLogin')
    firstLogin;
    @SessionStorage('phoneNumber')
    phoneNumber;

    constructor(
        private persianNumberConverter: PersianNumberConverterService,
        public router: Router,
        private dataService: DataService,
        private authService: AuthenticationService) {
        // this.dataService.backStack.unshift({url:this.router.url,name:'دریافت کد'});

    }

    /**
     * @ignore
     */
    ngOnInit() {

    }


    /**
     * This Method is for calling verify-code-request API and Saving the result (Token and refreshToken) in session storage.
     */


    sendVerifyCode() {
        this.phone = this.persianNumberConverter.convertPersianNumToEnglish(this.phone);
        const body = {
            phone: this.phone,
            user_type: 'repair_shop',
            uuid: Math.random().toString()
        };
        this.authService.getValidationCode('validate_phone/', body).subscribe(
            (res => {
                this.phoneNumber = this.phone;
                this.firstLogin = res.result['first login'];
                this.router.navigate(['/auth/login']);
            })
        );


    }


}
