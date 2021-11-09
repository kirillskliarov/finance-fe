import { Config } from './Config';

export const common: Pick<Config,
  'storageSessionKey' | 'exchanges' | 'brokers'> = {
  storageSessionKey: 'session',
  exchanges: {
    moex: {
      stockFee: 0.0001,
      currencyFee: 0.000015,
      exchangePart: 0.575,
      clearingPart: 0.425,
      currencyBigLotCount: 50000,
      currencyRegularLotFixPayment: 50,
      currencyMinTotalPayment: 1,
    },
  },
  brokers: {
    vtb: {
      fee: 0.0005,
    },
  },
}
