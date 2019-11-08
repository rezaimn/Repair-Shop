import {Injectable} from '@angular/core';

@Injectable()
export class DataService {

    constructor() {

    }

    currentRequestList= {
        new_orders: [],
        attended_orders: [],
        attending_orders: []
    };
    newRequestList= {
        new_orders: [],
        attended_orders: [],
        attending_orders: []
    };
    newRequestCount = 0;
    pendingRequestCount = 0;
    acceptedRequestCount = 0;
    backStack: any[] = [];

}
