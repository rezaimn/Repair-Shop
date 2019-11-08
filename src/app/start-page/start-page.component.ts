import { Component } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {Router} from '@angular/router';
import {DataService} from '../shared/services/data.service';


@Component({
  selector: 'app-server-error',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
    constructor(private router:Router,private dataService:DataService,){

    }

    customOptions: OwlOptions = {
        loop: true,
        autoplay:true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        dots: true,
        navSpeed: 700,
        navText: ['', ''],
        margin:10,
        items: 1,
        nav: false,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            740: {
                items: 1
            },
            940: {
                items: 1
            }
        },
    }
    public imageSources:any[]=[
        {
            src:'../../../assets/images/start-page/splash_intro_1.png',
            alt:'slider1',
            title:'در ترافیک رفت و برگشت که نمی مانید',
            text:'در زمانی که به خودرو نیازی ندارید و مشغول فعالیت روزمره هستید سرویس خودروی شما انجام می شود',
            id:1
        },
        {
            src:'../../../assets/images/start-page/splash_intro_2.png',
            alt:'slider2',
            title:'سرویس خودرو بدون معطلی',
            text:'کاهش تصادفات ناشی از نقص فنی و کاهش آلاینده های زیست محیطی و کاهش مصرف آب',
            id:2
        },
        {
            src:'../../../assets/images/start-page/splash_intro_3.png',
            alt:'slider3',
            title:'قیمت از قبل توافق شده',
            text:'هیچگونه انعام و پاداشی در ارائه خدمات وجود ندارد. با احترام کامل خدمات استانداردی ارائه می شود.',
            id:3
        },
        {
            src:'../../../assets/images/start-page/splash_intro_4.png',
            alt:'slider4',
            title:'تضمین اصالت کالا و کیفیت خدمات',
            text:'در زمانی که به خودرو نیازی ندارید و مشغول فعالیت روزمره هستید سرویس خودروی شما انجام می شود',
            id:2
        },
        {
            src:'../../../assets/images/start-page/splash_intro_5.png',
            alt:'slider5',
            title:'جلوگیری از اصطحلاک ناشی از رفت و آمد',
            text:'کاهش تصادفات ناشی از نقص فنی و کاهش آلاینده های زیست محیطی و کاهش مصرف آب',
            id:3
        }
    ];
    showLoginPage(){
        this.router.navigate(['/auth/verify-code-request']);
    }
}
