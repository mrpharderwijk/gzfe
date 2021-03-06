import { Component, OnInit, Input } from '@angular/core';
import { ObjectHelper } from '../../../helpers/object.helpter';
import { TrafficEventEntry } from '../../../models/traffic/traffic-event-entry.model';

@Component({
  selector: 'gz-road-work-item',
  templateUrl: './road-work-item.component.html',
  styleUrls: ['./road-work-item.component.scss'],
})
export class RoadWorkItemComponent implements OnInit {
  @Input() item: TrafficEventEntry;

  constructor() {}

  ngOnInit() {}

  /**
   * Returns the total amount of traffic jams
   */
  getTotalAmount(): string {
    if (!ObjectHelper.hasPath(this, 'item.roadWorks')) {
      return '? werkzaamheden';
    }

    const roadWorksAmount = !ObjectHelper.hasPath(this, 'item.roadWorks') ? '0' : this.item.roadWorks.length;

    return `${roadWorksAmount} werkzaamheden`;
  }
}
