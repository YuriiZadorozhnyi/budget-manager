import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
@Injectable()
export class CustomDatePipe implements PipeTransform {

  transform(value: any): any {
    const time = new Date(value);
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDay();

    return `${year}-${month}-${day}`;
  }
}
