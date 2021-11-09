import { SecurityStorage } from './SecurityStorage';
import { Portfolio } from './Portfolio';

export class PortfolioStorage {
  securityStorages: SecurityStorage[] = [];
  interestRate: number;

  constructor(public readonly portfolio: Portfolio) {}
}
