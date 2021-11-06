export enum SecurityType {
  STOCK = 'STOCK',
  ETF = 'ETF',
  CORPORATE_BOND = 'CORPORATE_BOND',
  FEDERAL_BOND = 'FEDERAL_BOND',
  CURRENCY = 'CURRENCY',
}

export const SECURITY_TYPES: ReadonlyArray<SecurityType> = [
  SecurityType.STOCK,
  SecurityType.ETF,
  SecurityType.CORPORATE_BOND,
  SecurityType.FEDERAL_BOND,
  SecurityType.CURRENCY,
];
