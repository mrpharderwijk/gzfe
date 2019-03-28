import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gz-traffic-list',
  templateUrl: './traffic-list.component.html',
  styleUrls: ['./traffic-list.component.scss'],
})
export class TrafficListComponent implements OnInit {
  @Input() items: any[];
  @Input() loading: boolean;
  @Input() type: string;

  constructor() {}

  ngOnInit() {}
}
