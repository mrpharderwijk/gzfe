import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metresToKm',
})
export class MetresToKmPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value ? `${value / 1000} km` : `${value} km`;
  }
}
