import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordComponent } from './change-password.component';

import {ChangePasswordModule} from './change-password.module';
import {AppModule} from '../../app.module';

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ChangePasswordModule,
        AppModule],
    });
    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
  });


  // it('ChangePASSWord comments invalid when empty ',  () => {
  //   expect(component.changeform.valid).toBeFalsy();
  // });


  // it('NewPassword field validity',  () => {
  //   let password = component.changeform.controls['newPassword'];
  //   expect(password.valid).toBeFalsy();
  //
  //   let errors = {};
  //   errors = password.errors || {};
  //   expect(errors['required']).toBeTruthy();
  //
  //   password.setValue("testPas");
  //   errors = password.errors || {};
  //   expect(errors['minlength']).toBeTruthy();
  // });
  //
  // it('ConfirmedPassword field validity',  () => {
  //   let password = component.changeform.controls['confirmedPassword'];
  //   expect(password.valid).toBeFalsy();
  //
  //   let errors = {};
  //   errors = password.errors || {};
  //   expect(errors['required']).toBeTruthy();
  //
  //   password.setValue("testPas");
  //   errors = password.errors || {};
  //   expect(errors['minlength']).toBeTruthy();
  // });

});
