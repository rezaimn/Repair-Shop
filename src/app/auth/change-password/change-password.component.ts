import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

/**
 * this component is for handling change password related tasks
 */
@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

    /**
     * @ignore
     */
    changeform: FormGroup;
    /**
     * @ignore
     */
    newPassword: FormControl;
    /**
     * @ignore
     */
    confirmedPassword: FormControl;

    /**
     * @ignore
     */
    constructor(private authService: AuthenticationService, public router: Router) {
        this.createFormControls();
        this.createForm();
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
        this.newPassword = new FormControl('', [Validators.required, Validators.minLength(8)]);
        this.confirmedPassword = new FormControl('', [Validators.required, Validators.minLength(8)]);
    }

    /**
     * @ignore
     */
    createForm() {
        this.changeform = new FormGroup({
            newPassword: this.newPassword,
            confirmedPassword: this.confirmedPassword
        });
    }


    /**
     * This Method is for having access to comments Validators within the html.
     */

    get f() {
        return this.changeform.controls;
    }


    /**
     * This Method is for calling changePassword API and send new password in the body of API and change the password.
     */

    changePass() {
        const body = this.changeform.value.confirmedPassword;
        this.authService.changePassword('/user/changePassword', body).subscribe(
            (res: any) => {
                this.router.navigateByUrl('/layout/dashboard');
            }
        );
    }

    /**
     * This Method is for cancel button it send back user to dashboard page
     */
    changeCancelButton() {
        this.router.navigateByUrl('/layout/dashboard');
    }

}

