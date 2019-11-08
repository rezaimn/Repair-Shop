 import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {LocalStorage, SessionStorage} from 'ngx-webstorage';

 /**
  * @ignore
  */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  @LocalStorage('token') token;
  /**
   * @ignore
   */
  constructor(private http: HttpClient) { }


  /**
   *  it adds the input url to the base URL
   */
  setUrl(url: string) {
    return environment.baseUrl + url;
  }

  /**
   *  here we specify that verify-code-request is a post request that accepts 2 arguments (url,body)
   */
  login(url: string, body:any): Observable<any>{
    return this.http.post(this.setUrl(url) , body).pipe(
      tap(
        (res: any) => {

        },
        (error: any) => {

        }
      )
    )
  }
     /**
      *  here we specify that verify-code-request is a post request that accepts 2 arguments (url,body)
      */
     getValidationCode(url: string, body:any): Observable<any>{
         return this.http.post(this.setUrl(url) , body).pipe(
             tap(
                 (res: any) => {

                 },
                 (error: any) => {

                 }
             )
         )
     }
     register(url: string, body:any): Observable<any>{
         return this.http.post(this.setUrl(url) , body).pipe(
             tap(
                 (res: any) => {

                 },
                 (error: any) => {

                 }
             )
         )
     }
  /**
   *  here we specify that refreshToken is a post request that accepts 2 arguments (url,body)
   */
  refreshToken(url: string, body: any): Observable<any> {
    return this.http.post(this.setUrl(url), body).pipe(
      tap(
        (res: any) => {

        },
        (error: any) => {

        }
      )
    )
  }

  /**
   *  here we specify that logout is a delete request that accepts 1 argument (url)
   */
  logout(url: string): Observable<any> {
    return this.http.delete(this.setUrl(url)).pipe(
      tap(
        (res: any) => {

        },
        (error: any) => {

        }
      )
    )
  }

  /**
   *  here we specify that forgetPassword is a post request that accepts 2 arguments (url,body)
   */
  forgetPassword(url:string, body:any): Observable<any>{
    return this.http.post(this.setUrl(url) , body).pipe(
      tap(
        (res:any)=>{
        },
        (error:any)=>{

        }
      )
    )
  }

  /**
   *  here we specify that changePassword is a post request that accepts 2 arguments (url,body)
   */
  changePassword(url:string, body:string): Observable<any>{
    return this.http.post(this.setUrl(url),body).pipe(
      tap(
        (res:any)=>{
        },
        (error:any)=>{

        }
      )
    )
  }

  /**
   *  here we specify that getAccount is a get request that accepts 1 argument (url)
   */
  getAccount(url:string): Observable<any>{
    return this.http.get(this.setUrl(url)).pipe(
      tap(
        (res:any)=>{
        },
        (error:any)=>{

        }
      )
    )
  }



}
