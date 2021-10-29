import { Portfolio } from './Portfolio';
import { Tax } from './Tax';
import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class PortfolioTax {
  @Expose({ toPlainOnly: true })
  uuid: string;

  @Type(() => Portfolio)
  portfolio: Portfolio;

  @Type(() => Tax)
  tax: Tax;

  // TODO: think about: percentage or absolute value?
  // TODO: ABSOLUTE to make more easiest calculation
  @Expose()
  portion: number;
}
