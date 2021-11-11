import { Inject, Injectable } from '@angular/core';
import { MOEXFeeParams, MOEXStockFeeParams } from './params/MoexFeeParams';
import { roundMoney } from '../../libs/roundMoney';
import { MIN_FIX_PAYMENT } from '../../libs/constants';
import { CONFIG_TOKEN } from '../../injection-tokens/config.token';
import { Config } from '../../../../environments/Config';
import { MOEXConfig } from '../../../../environments/exchanges/MOEXConfig';

@Injectable({
  providedIn: 'root'
})
export class MoexFeeService {
  private readonly moexConfig: MOEXConfig;

  constructor(@Inject(CONFIG_TOKEN) config: Config) {
    this.moexConfig = config.exchanges.moex;
  }

  getFee(params: MOEXFeeParams): number {
    return params.security.isCurrency() ? this.getCurrencyFee(params) : this.getStockFee(params);
  }

  getStockFee(params: MOEXStockFeeParams): number {
    const absSumm = Math.abs(params.summ);

    let exchangePayment = roundMoney(absSumm * this.moexConfig.stockFee * this.moexConfig.exchangePart);
    if (exchangePayment < MIN_FIX_PAYMENT) {
      exchangePayment = MIN_FIX_PAYMENT;
    }

    let clearingPayment = roundMoney(absSumm * this.moexConfig.stockFee * this.moexConfig.clearingPart);
    if (clearingPayment < MIN_FIX_PAYMENT) {
      clearingPayment = MIN_FIX_PAYMENT;
    }

    return exchangePayment + clearingPayment;
  }

  getCurrencyFee(params: MOEXFeeParams): number {
    const absSum = Math.abs(params.summ);
    const absCount = Math.abs(params.count);

    if (absCount > this.moexConfig.currencyBigLotCount || params.isByOne) {
      let exchangePayment = roundMoney(absSum * this.moexConfig.currencyFee * this.moexConfig.exchangePart);
      let clearingPayment = roundMoney(absSum * this.moexConfig.currencyFee * this.moexConfig.clearingPart);

      const totalPayment = exchangePayment + clearingPayment;
      if (totalPayment < this.moexConfig.currencyMinTotalPayment) {
        return this.moexConfig.currencyMinTotalPayment;
      }

      return totalPayment;
    }

    return this.moexConfig.currencyRegularLotFixPayment;
  }
}
