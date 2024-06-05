import { TestBed } from '@angular/core/testing';

import { ValidateSimService } from './validate-sim.service';

describe('ValidateSimService', () => {
  let service: ValidateSimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateSimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
