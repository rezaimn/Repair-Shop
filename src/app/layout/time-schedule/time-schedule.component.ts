import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/services/data.service';
import {Router} from '@angular/router';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-time-schedule',
    templateUrl: './time-schedule.component.html',
    styleUrls: ['./time-schedule.component.scss'],
    animations: [routerTransition()]
})
export class TimeScheduleComponent implements OnInit {
    constructor( private dataService:DataService,private router:Router) {
        this.dataService.backStack.unshift({url:this.router.url,name:'زمانبندی'});
    }

    ngOnInit() {}
}
