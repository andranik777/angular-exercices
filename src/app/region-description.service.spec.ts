import { TestBed } from '@angular/core/testing';

import { RegionDescriptionService } from './region-description.service';

describe('RegionDescriptionService', () => {
  let service: RegionDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
