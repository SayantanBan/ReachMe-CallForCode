import { TestBed } from '@angular/core/testing';

import { ReachmeService } from './reachme.service';

describe('ReachmeService', () => {
  let service: ReachmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReachmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
