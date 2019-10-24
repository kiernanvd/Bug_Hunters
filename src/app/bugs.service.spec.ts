import { TestBed } from '@angular/core/testing';

import { BugsService } from './bugs.service';

describe('BugsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BugsService = TestBed.get(BugsService);
    expect(service).toBeTruthy();
  });
});
