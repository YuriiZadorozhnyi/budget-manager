import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTime'
})
@Injectable()
export class CustomTimePipe implements PipeTransform {

  transform(value: any): any {
    const time = new Date(value);
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    return `${hour}:${min}:${sec}`;
  }
}
