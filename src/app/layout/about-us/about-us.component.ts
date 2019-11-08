import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {HttpService} from '../../shared/services/http.service';
import {environment} from '../../../environments/environment';
import {DataService} from '../../shared/services/data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss'],
    animations: [routerTransition()]
})
export class AboutUsComponent implements OnInit {
    environment=environment;
    customOptions: OwlOptions = {
        loop: true,
        autoplay:true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        dots: false,
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
    ];
    public socials:any[]=[];
    public phones:any[]=[];
    constructor(private httpService:HttpService, private dataService:DataService,private router:Router) {
        this.dataService.backStack.unshift({url:this.router.url,name:'درباره ما'});
        this.getSliderData();
        this.getSocials();
        this.getPhones();
    }

    ngOnInit() {}
    getSliderData(){
        this.httpService.get('slider/about/').subscribe(
            (res=>{
                this.imageSources=res.result;
            })
        )
    }
    getSocials(){
        this.httpService.get('about_us/social/').subscribe(
            (res=>{
                this.socials=res.result;
            })
        )
    }
    getPhones(){
        this.httpService.get('about_us/phone/').subscribe(
            (res=>{
                this.phones=res.result;
            })
        )
    }
}
