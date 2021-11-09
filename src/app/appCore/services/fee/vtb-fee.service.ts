import { Inject, Injectable } from '@angular/core';
import { SpecificBrokerFeeParams } from './params/BrokerFeeParams';
import { CONFIG_TOKEN } from '../../injection-tokens/config.token';
import { Config } from '../../../../environments/Config';
import { roundMoney } from '../../libs/roundMoney';
import { MIN_FIX_PAYMENT } from '../../libs/constants';
import { VTBConfig } from '../../../../environments/brokers/VTBConfig';

const vtb = 'vtb';

@Injectable({
  providedIn: 'root'
})
export class VTBFeeService {
  private readonly vtbConfig: VTBConfig;

  constructor(@Inject(CONFIG_TOKEN) config: Config) {
    this.vtbConfig = config.brokers.vtb;
  }

  getFee(params: SpecificBrokerFeeParams): number {
    if (this.isVtbFund(params.security.secid)) {
      return 0;
    }

    const payment = roundMoney(Math.abs(params.summ) * this.vtbConfig.fee);
    if (payment < MIN_FIX_PAYMENT) {
      return MIN_FIX_PAYMENT;
    }

    return payment;
  }

  isVtbFund(secid: string): boolean {
    return secid.toLowerCase().startsWith(vtb);
  }
}
