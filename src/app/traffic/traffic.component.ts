import { Component, OnInit } from '@angular/core';
import { TrafficFeedService } from '../shared/services/traffic-feed.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import TrafficMock from './traffic.mock';

@Component({
  selector: 'gz-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.scss'],
})
export class TrafficComponent implements OnInit {
  traffic = null;
  trafficLoading = false;

  constructor(private trafficFeedService: TrafficFeedService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.trafficLoading = true;
    this.trafficFeedService
      .getTraffic()
      .pipe(
        catchError(error => {
          this.trafficLoading = false;
          console.log(error);
          return EMPTY;
        }),
      )
      .subscribe(trafficFeedResponse => {
        this.trafficLoading = false;
        this.traffic = trafficFeedResponse.data;
      });
  }
}
