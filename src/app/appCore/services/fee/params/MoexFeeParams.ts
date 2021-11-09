import { Security } from '../../../entities/Security';

export interface MOEXFeeParams {
  security: Security,
  count: number,
  summ: number,
  isCurrensy: boolean,
  isByOne: boolean,
}

export type MOEXStockFeeParams = Pick<MOEXFeeParams, 'summ'>;
export type MOEXCurrencyFeeParams = Omit<MOEXFeeParams, 'isCurrensy'>;
