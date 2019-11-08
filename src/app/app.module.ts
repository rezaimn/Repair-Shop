import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalModule} from 'ngx-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuard} from './shared';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {DeleteConfirmationModalComponent} from './shared/components/delete-confirmation-modal/delete-confirmation-modal.component';
import {AlertMessageService} from './shared/services/alert-message.service';
import {EventEmitterService} from './shared/services/event-emitter.service';
import {DataService} from './shared/services/data.service';
import {PersianNumberConverterService} from './shared/services/persian-number-converter.service';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        NgxWebstorageModule.forRoot(),
        ModalModule.forRoot(),

    ],
    declarations: [
        AppComponent,
        DeleteConfirmationModalComponent
    ],
    providers: [
        AuthGuard,
        AlertMessageService,
        EventEmitterService,
        DataService,
        PersianNumberConverterService
    ],
    bootstrap: [AppComponent],
    entryComponents: [DeleteConfirmationModalComponent],
})
export class AppModule {
}
