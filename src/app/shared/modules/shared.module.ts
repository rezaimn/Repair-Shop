import {NgModule} from '@angular/core';
import {HttpService} from '../services/http.service';
import {AlertMessageComponent} from '../components/alert-message/alert-message.component';
import {CommonModule} from '@angular/common';
import {SlideshowModule} from 'ng-simple-slideshow';
import {HttpClientModule} from '@angular/common/http';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ToggleButtonComponent} from '../components/toggle-button/toggle-button.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PlusMinusButtonComponent} from '../components/plus-minus-button/plus-minus-button.component';
import {FormsModule} from '@angular/forms';
import {CustomInputComponent} from '../components/custom-input/custom-input.component';
import {CustomSelectComponent} from '../components/custom-select/custom-select.component';
import {GareToJalaliPipe} from '../pipes/gare-to-jalali.pipe';
import {GetLocationService} from '../services/get-location.service';
import { CommingSoonComponent } from 'src/app/layout/components/comming-soon/comming-soon.component';


@NgModule({
    /**
     * Here we can add modules that we want to share.
     */
    imports: [
        CommonModule,
        FormsModule,
        SlideshowModule,
        HttpClientModule,
        AngularSvgIconModule,
        CarouselModule,
        NgbModule
    ],
    /**
     * Here we can add components, pipes and directives that we want to share.
     */
    declarations: [
        AlertMessageComponent,
        ToggleButtonComponent,
        PlusMinusButtonComponent,
        CustomInputComponent,
        CustomSelectComponent,
        GareToJalaliPipe,
        CommingSoonComponent,
    ],
    /**
     * Here we can add modules, components, pipes and directives that we want to share.
     */
    exports: [
        FormsModule,
        AlertMessageComponent,
        ToggleButtonComponent,
        SlideshowModule,
        HttpClientModule,
        AngularSvgIconModule,
        CarouselModule,
        NgbModule,
        PlusMinusButtonComponent,
        CustomInputComponent,
        CustomSelectComponent,
        GareToJalaliPipe,
        CommingSoonComponent,
    ],
    entryComponents: [],
    /**
     * Here we can add services that we want to share.
     */
    providers: [
        HttpService,
        GetLocationService
    ]
})

/**
 * we added some modules,services,pipes and components here to share them with other modules.
 */
export class SharedModule {
}
