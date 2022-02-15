import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitar'
})
export class LimitarPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 7) return value.substring(0,4)+"...";
    else return value;
  }

}
