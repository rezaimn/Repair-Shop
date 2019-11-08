import { Injectable } from '@angular/core';

import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {AlertMessageService} from '../services/alert-message.service';
import {LocalStorage, SessionStorage} from 'ngx-webstorage';
import {DataService} from '../services/data.service';
import {EventEmitterService} from '../services/event-emitter.service';

@Injectable()
export class LayoutHttpInterceptor implements HttpInterceptor {
    @LocalStorage('token') token;
  constructor(public alertMessageService: AlertMessageService,private eventEmitterService:EventEmitterService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Token ' + this.token) });
    }
    // if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    // }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // console.log('event--->>>', event);
          // this.errorDialogService.openDialog(even
            // t);
            if(request.method=='POST'){
                this.alertMessageService.success('عملیات موفق' ,'عملیات ثبت موفقیت آمیز بود.');
            }
            if(request.method=='PUT' || request.method=='PATCH'){
                this.alertMessageService.success('عملیات موفق' ,'عملیات بروزرسانی موفقیت آمیز بود.');
            }
            if(request.method=='DELETE'){
                this.alertMessageService.success('عملیات موفق' ,'عملیات حذف موفقیت آمیز بود.');
            }


        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
          let data = {};
        this.alertMessageService.fail(error.status ,error && error.error.message ? error.error.message : '');
        return throwError(error);
      }));
  }
}
