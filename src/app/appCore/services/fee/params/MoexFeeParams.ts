import { Security } from '../../../entities/Security';

export interface MOEXFeeParams {
  security: Security,
  count: number,
  summ: number,
  isByOne: boolean,
}

export type MOEXStockFeeParams = Pick<MOEXFeeParams, 'summ'>;
