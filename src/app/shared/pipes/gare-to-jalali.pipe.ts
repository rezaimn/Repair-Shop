import { Injectable,Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({ name: 'jalaliDate', pure : false })
export class GareToJalaliPipe implements PipeTransform {
    transform( date: string):string {
        let MomentDate = moment(date, 'YYYY/MM/DD');
        //console.log(MomentDate.locale('fa').format('YYYY/M/D'))
        return MomentDate.locale('fa').format('YYYY/M/D');
    }
}

