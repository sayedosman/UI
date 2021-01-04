import { TestBed } from '@angular/core/testing';

import { DepatmentServiceService } from './depatment-service.service';

describe('DepatmentServiceService', () => {
  let service: DepatmentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepatmentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
