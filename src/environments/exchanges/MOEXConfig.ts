export interface MOEXConfig {
  readonly stockFee: number;
  readonly currencyFee: number;
  readonly exchangePart: number;
  readonly clearingPart: number;
  readonly currencyBigLotCount: number;
  readonly currencyRegularLotFixPayment: number;
  readonly currencyMinTotalPayment: number;
}
