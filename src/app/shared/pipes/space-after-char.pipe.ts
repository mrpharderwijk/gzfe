import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceAfterChar',
})
export class SpaceAfterCharPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value ? value.replace(/^(.{1})(.*)$/, '$1 $2') : value;
  }
}
