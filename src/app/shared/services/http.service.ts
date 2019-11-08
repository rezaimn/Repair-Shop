import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {EventEmitterService} from './event-emitter.service';

/**
 * this service is for handling RESTFUL APIs
 */
@Injectable()
export class HttpService {

    constructor(private http: HttpClient, private eventEmitterService: EventEmitterService) {
    }

    /**
     *  it adds the input url to the base URL
     */
    getFullUrl(url: string) {
        return environment.baseUrl + url;
    }

    /**
     * @param {string:url}
     *  Here we can call a get request to get an/array item/s.
     *  @return {Observable}
     */
    get(url: string): Observable<any> {
        this.eventEmitterService.loading.emit(true);
        return this.http.get(this.getFullUrl(url)).pipe(
            tap(
                (res: any) => {
                    this.eventEmitterService.loading.emit(false);
                },
                (error: any) => {
                    this.eventEmitterService.loading.emit(false);
                }
            )
        );
    }
    intervalGet(url: string): Observable<any> {

        return this.http.get(this.getFullUrl(url)).pipe(
            tap(
                (res: any) => {

                },
                (error: any) => {

                }
            )
        );
    }
    /**
     * @param {string:url},{json:body}
     *  Here we can call a post request to add an item.
     *  @return {Observable}
     */
    post(url: string, body: any): Observable<any> {
        this.eventEmitterService.loading.emit(true);
        return this.http.post(this.getFullUrl(url), body).pipe(
            tap(
                (res: any) => {
                    this.eventEmitterService.loading.emit(false);
                },
                (error: any) => {
                    this.eventEmitterService.loading.emit(false);
                }
            )
        );
    }

    patch(url: string, body: any): Observable<any> {
        this.eventEmitterService.loading.emit(true);
        return this.http.patch(this.getFullUrl(url), body).pipe(
            tap(
                (res: any) => {
                    this.eventEmitterService.loading.emit(false);
                },
                (error: any) => {
                    this.eventEmitterService.loading.emit(false);

                }
            )
        );
    }

    /**
     * @param {string:url},{json:body}
     *  Here we can call a put request to update an item.
     *  @return {Observable}
     */
    put(url: string, body: any): Observable<any> {
        this.eventEmitterService.loading.emit(true);
        return this.http.put(this.getFullUrl(url), body).pipe(
            tap(
                (res: any) => {
                    this.eventEmitterService.loading.emit(false);
                },
                (error: any) => {
                    this.eventEmitterService.loading.emit(false);
                }
            )
        );
    }

    /**
     * @param {string:url}
     *  Here we can call a delete request to delete an item.
     *  @return {Observable}
     */
    delete(url: string): Observable<any> {
        this.eventEmitterService.loading.emit(true);
        return this.http.delete(this.getFullUrl(url)).pipe(
            tap(
                (res: any) => {

                },
                (error: any) => {

                }
            )
        );
    }
}
