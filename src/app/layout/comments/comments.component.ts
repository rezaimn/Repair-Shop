import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {HttpService} from '../../shared/services/http.service';
import {DataService} from '../../shared/services/data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss'],
    animations: [routerTransition()]
})
export class CommentsComponent implements OnInit {
    title='';
    subjects=[
    ];
    selectedSubject:any;
    messageText='';
    selectedId=-1;
    constructor(private httpService:HttpService, private dataService:DataService,private router:Router) {
        this.dataService.backStack.unshift({url:this.router.url,name:'پیشنهادات'});
    }
    ngOnInit() {
        this.getCategories();
    }
    getCategories(){
        this.httpService.get('contact_us/category/').subscribe(
            (res=>{
                this.subjects=res.result.map((item)=>{
                    let body={
                        name:item.category,
                        id:item.id
                    }
                    return body;
                });
            })
        )
    }
    sendComments(){

        let body={
            user_id:'',
            category:this.selectedSubject.id,
            title:this.title,
            description:this.messageText
        }
        this.httpService.post('contact_us/send_message/',body).subscribe(
            (res=>{
               this.router.navigate(['/dashboard'])
            })
        )
    }
}
