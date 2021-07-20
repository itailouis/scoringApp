import { TestBed } from '@angular/core/testing';

import { HelperRequestService } from './helper-request.service';

describe('HelperRequestService', () => {
  let service: HelperRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelperRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
