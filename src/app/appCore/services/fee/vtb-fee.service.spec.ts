import { TestBed } from '@angular/core/testing';

import { VTBFeeService } from './vtb-fee.service';

describe('VtbFeeService', () => {
  let service: VTBFeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VTBFeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
