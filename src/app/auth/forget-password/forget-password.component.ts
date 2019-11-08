import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PersianNumberConverterService} from '../../shared/services/persian-number-converter.service';

/**
 * this component is for handling forget password related tasks
 */
@Component({
    selector: 'app-forget-password',
    templateUrl: './forget-password.component.html',
    styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

    /**
     * @ignore
     */
    forgetform: FormGroup;
    /**
     * @ignore
     */
    forgetPassword: FormControl;


    /**
     * @ignore
     */
    constructor(
        private persianNumberConverter: PersianNumberConverterService,
        private authService: AuthenticationService, private router: Router) {
        this.createFormControls();
        this.createForm();
    }


    /**
     * This Method is for calling forgetPassword API Then the new pass will send to user via sms.
     */

    getNewPass() {
        const body = this.forgetform.value.username;
        this.authService.forgetPassword('/aaa/user/forgetPassword', body).subscribe(
            (res: any) => {

            }
        );
    }

    /**
     * @ignore
     */
    ngOnInit() {

    }

    /**
     * @ignore
     */
    createFormControls() {
        this.forgetPassword = new FormControl('', Validators.required);
    }

    /**
     * @ignore
     */
    createForm() {
        this.forgetform = new FormGroup({
            forgetPassword: this.forgetPassword,
        });
    }


    /**
     * This Method is for cancel button it send back user to verify-code-request page
     */
    forgetCancelButton() {
        this.router.navigateByUrl('');
    }

}
