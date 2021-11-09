import { TestBed } from '@angular/core/testing';

import { MoexFeeService } from './moex-fee.service';

describe('MoexFeeService', () => {
  let service: MoexFeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoexFeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
