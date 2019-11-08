import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyCodeRequestRoutingModule } from './verify-code-request-routing.module';
import { VerifyCodeRequestComponent } from './verify-code-request.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/modules/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        VerifyCodeRequestRoutingModule],
    declarations: [VerifyCodeRequestComponent]
})
export class VerifyCodeRequestModule {}
