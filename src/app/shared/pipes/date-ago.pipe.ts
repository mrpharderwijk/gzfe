import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo',
  pure: true,
})
export class DateAgoPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);

      // less than 30 seconds ago will show as 'Just now'
      if (seconds < 5) {
        return 'een paar seconden geleden';
      }

      const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
      };

      let counter;

      for (const key of Object.keys(intervals)) {
        counter = Math.floor(seconds / intervals[key]);

        if (counter > 0) {
          const plural = counter > 1;
          return `${counter} ${this.getKey(key, plural)} geleden`;
        }
      }
    }

    return value;
  }
  /**
   * Returns the plural or singular version
   * @param intervalKey
   * @param plural
   */
  getKey(intervalKey, plural = false) {
    switch (intervalKey) {
      case 'year':
        return 'jaar';
      case 'month':
        return !plural ? 'maand' : 'maanden';
      case 'week':
        return !plural ? 'week' : 'weken';
      case 'day':
        return !plural ? 'dag' : 'dagen';
      case 'hour':
        return 'uur';
      case 'minute':
        return !plural ? 'minuut' : 'minuten';
      case 'second':
        return !plural ? 'seconde' : 'seconden';
    }
  }
}
