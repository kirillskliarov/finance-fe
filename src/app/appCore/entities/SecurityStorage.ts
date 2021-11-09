import { Security } from './Security';

export class SecurityStorage {
  amount: number = 0;
  currentPrice: number;

  constructor(public readonly security: Security) {}
}
