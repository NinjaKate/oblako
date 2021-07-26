import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sessionsQuantityTitle'
})
export class SessionsQuantityTitlePipe implements PipeTransform {

    transform(totalRecords: number): string {
        let title = '';

        if (typeof totalRecords === 'number') {
            const counter = totalRecords;
            const calculator = (count: number) => {
                if (count === 0) {
                    title = `${totalRecords} сессий`;
                } else if (count === 1) {
                    title = `${totalRecords} сессия`;
                } else if (count > 1 && count < 5) {
                    title = `${totalRecords} сессии`;
                } else if (count >= 5 && count < 21) {
                    title = `${totalRecords} сессий`;
                } else if (count >= 21 && count < 110) {
                    calculator(count % 10);
                } else {
                    calculator(count % 100);
                }
            };
            calculator(counter);
        }
        return title;
    }
}
