import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// declare var google: any;
@Injectable()
export class GetLocationService {
    constructor(public http: HttpClient) {
    }

    getPosition = function ():any {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }
}
