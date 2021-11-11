import { Injectable } from '@angular/core';
import { BrokerFeeParams } from './params/BrokerFeeParams';
import { VTBFeeService } from './vtb-fee.service';

@Injectable({
  providedIn: 'root'
})
export class BrokerFeeService {

  constructor(private readonly vtbFeeService: VTBFeeService) { }

  getFee(params: BrokerFeeParams): number | null {
    switch (params.broker.name.toLowerCase()) {
      case 'vtb':
      case 'втб': {
        return this.vtbFeeService.getFee(params);
      }
      default: {
        return null;
      }
    }
  }
}
