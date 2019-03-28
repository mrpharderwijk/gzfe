import { TestBed } from '@angular/core/testing';

import { TrafficFeedService } from './traffic-feed.service';

describe('TrafficFeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrafficFeedService = TestBed.get(TrafficFeedService);
    expect(service).toBeTruthy();
  });
});
