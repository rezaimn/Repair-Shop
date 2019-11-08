import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {DataService} from '../../shared/services/data.service';
import {Router} from '@angular/router';
import {HttpService} from '../../shared/services/http.service';

@Component({
    selector: 'app-services-list',
    templateUrl: './services-list.component.html',
    styleUrls: ['./services-list.component.scss'],
    animations: [routerTransition()]
})
export class ServicesListComponent implements OnInit{
    servicesList=[];
    constructor( private dataService:DataService,private router:Router,private httpService:HttpService){
        this.dataService.backStack.unshift({url:this.router.url,name:'لیست سرویس ها'});
    }
    ngOnInit(): void {
        this.getAllServices();

    }
    getAllServices(){
        this.httpService.get('orders/shop/').subscribe(
            (res=>{
                console.log(res);
                this.servicesList=res.data;
            })
        )

    }
}
