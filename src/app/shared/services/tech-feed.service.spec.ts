import { TestBed } from '@angular/core/testing';

import { TechFeedService } from './tech-feed.service';

describe('TechFeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechFeedService = TestBed.get(TechFeedService);
    expect(service).toBeTruthy();
  });
});
