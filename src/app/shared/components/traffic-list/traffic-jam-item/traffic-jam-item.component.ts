import { Component, OnInit, Input } from '@angular/core';
import { ObjectHelper } from '../../../helpers/object.helpter';

@Component({
  selector: 'gz-traffic-jam-item',
  templateUrl: './traffic-jam-item.component.html',
  styleUrls: ['./traffic-jam-item.component.scss'],
})
export class TrafficJamItemComponent implements OnInit {
  @Input() item;

  totalAmount: string;
  totalDistance: number;
  totalDelay: number;

  constructor() {}

  ngOnInit() {
    this.totalAmount = this.getTotalAmount();
    this.totalDistance = this.getTotalDistance();
    this.totalDelay = this.getTotalDelay();
  }

  /**
   * Returns the total amount of traffic jams
   */
  getTotalAmount(): string {
    if (!ObjectHelper.hasPath(this, 'item.trafficJams')) {
      return '? files';
    }

    const trafficJamsAmount = !ObjectHelper.hasPath(this, 'item.trafficJams') ? '0' : this.item.trafficJams.length;

    return `${trafficJamsAmount} file${trafficJamsAmount > 1 ? 's' : ''}`;
  }

  /**
   * Returns the total distance of all traffic jams
   */
  getTotalDistance(): number {
    return this.item.trafficJams.reduce(
      (accTotal, currEvent) => (currEvent.distance ? accTotal + currEvent.distance : 0),
      0,
    );
  }

  /**
   * Returns the total amount of traffic jams delay in minutes
   */
  getTotalDelay(): number {
    return this.item.trafficJams.reduce((accTotal, currEvent) => (currEvent.delay ? accTotal + currEvent.delay : 0), 0);
  }
}
