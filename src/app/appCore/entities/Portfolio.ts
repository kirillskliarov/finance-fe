import { Exclude, Expose } from 'class-transformer';
import { Deal } from './Deal';
import { PortfolioTax } from './PortfolioTax';

@Exclude()
export class Portfolio {
  @Expose({ toPlainOnly: true })
  uuid: string;

  @Expose()
  name: string;

  @Expose()
  deals: Deal[];

  @Expose()
  portfolioTaxes: PortfolioTax[];
}
