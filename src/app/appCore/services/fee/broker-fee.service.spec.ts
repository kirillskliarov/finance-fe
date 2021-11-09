import { TestBed } from '@angular/core/testing';

import { BrokerFeeService } from './broker-fee.service';

describe('BrokerFeeService', () => {
  let service: BrokerFeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrokerFeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
