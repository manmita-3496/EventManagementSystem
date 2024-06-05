import { TestBed } from '@angular/core/testing';

import { AllCustomerService } from './all-customer.service';

describe('AllCustomerService', () => {
  let service: AllCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
