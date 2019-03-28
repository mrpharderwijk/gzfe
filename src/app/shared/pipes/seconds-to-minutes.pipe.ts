import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToMinutes',
})
export class SecondsToMinutesPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value ? `${value / 60} minuten` : `${value} minuten`;
  }
}
