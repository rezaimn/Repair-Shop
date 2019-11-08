import {  ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordComponent } from './forget-password.component';
import {ForgetPasswordModule} from './forget-password.module';
import {AppModule} from '../../app.module';

describe('ForgetPasswordComponent', () => {
  let component: ForgetPasswordComponent;
  let fixture: ComponentFixture<ForgetPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        ForgetPasswordModule,
        AppModule
      ]
    });
    fixture = TestBed.createComponent(ForgetPasswordComponent);
    component = fixture.componentInstance;
  });


  // it('ForgetPassword comments invalid when empty ',  () => {
  //   expect(component.forgetform.valid).toBeFalsy();
  // });
  //
  // it('ForgetPassword username field validity',  () => {
  //   let username = component.forgetform.controls['forgetPassword'];
  //   expect(username.valid).toBeFalsy();
  //
  //   let errors = {};
  //   errors = username.errors || {};
  //   expect(errors['required']).toBeTruthy();
  //
  //   username.setValue("testUsername");
  //   errors = username.errors || {};
  //   expect(errors['required']).toBeFalsy();
  // });


});
