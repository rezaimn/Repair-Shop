import {Injectable} from '@angular/core';

@Injectable()
export class PersianNumberConverterService {

    constructor() {

    }

    persianNumber = {
        '۰': '0',
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9'
    };

    convertPersianNumToEnglish(number: string) {
        let arrayNumber = number.split('');
        arrayNumber = arrayNumber.map(char => {
            return this.persianNumber[char] ? this.persianNumber[char] : char;
        });
        return arrayNumber.join('');
    }

}
