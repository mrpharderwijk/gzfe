import { Component, OnInit, Input } from '@angular/core';
import { ObjectHelper } from '../../../helpers/object.helpter';

@Component({
  selector: 'gz-radar-item',
  templateUrl: './radar-item.component.html',
  styleUrls: ['./radar-item.component.scss'],
})
export class RadarItemComponent implements OnInit {
  @Input() item;

  constructor() {}

  ngOnInit() {}

  /**
   * Returns the total amount of radars
   */
  getTotalAmount(): string {
    if (!ObjectHelper.hasPath(this, 'item.radars')) {
      return '? flitsers';
    }

    const radarsAmount = !ObjectHelper.hasPath(this, 'item.radars') ? '0' : this.item.radars.length;

    return `${radarsAmount} flitser${radarsAmount > 1 ? 's' : ''}`;
  }
}
