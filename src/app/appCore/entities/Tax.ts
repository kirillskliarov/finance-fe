import { Account } from './Account';
import { PortfolioTax } from './PortfolioTax';
import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class Tax {
  @Expose()
  uuid: string;

  @Expose()
  amount: number;

  @Type(() => Account)
  account: Account;

  @Type(() => PortfolioTax)
  portfolioTaxes: PortfolioTax[];
}
