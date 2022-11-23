import { TestBed } from '@angular/core/testing';

import { VirusTotalService } from './virus-total.service';

describe('VirusTotalService', () => {
  let service: VirusTotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirusTotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
