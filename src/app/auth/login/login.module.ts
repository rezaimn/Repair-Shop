import { NgModule } from '@angular/core';
import {CommonModule, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/modules/shared.module';
import {GetLocationService} from '../../shared/services/get-location.service';
import {AgmCoreModule} from '@agm/core';
import {ModalModule} from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        LoginRoutingModule,
        ModalModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyACckusHX9FL5LLcLfNvrOwxQQ-pBbwUDw'
        }),
    ],
    declarations: [LoginComponent],
    providers:[

        GetLocationService,
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class LoginModule {}
