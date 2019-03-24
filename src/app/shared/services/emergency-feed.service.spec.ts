import { TestBed } from '@angular/core/testing';

import { EmergencyFeedService } from './emergency-feed.service';

describe('EmergencyFeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmergencyFeedService = TestBed.get(EmergencyFeedService);
    expect(service).toBeTruthy();
  });
});
