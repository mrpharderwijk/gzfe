import { Component, OnInit, Input } from '@angular/core';
import { TrafficEvent } from '../../models/traffic/traffic-event.model';

@Component({
  selector: 'gz-traffic-list',
  templateUrl: './traffic-list.component.html',
  styleUrls: ['./traffic-list.component.scss'],
})
export class TrafficListComponent implements OnInit {
  @Input() items: TrafficEvent[];
  @Input() loading: boolean;
  @Input() type: string;

  constructor() {}

  ngOnInit() {}
}
