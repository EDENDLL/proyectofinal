import { TestBed } from '@angular/core/testing';

import { RedsService } from './reds.service';

describe('RedsService', () => {
  let service: RedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
