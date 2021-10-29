import { Account } from './Account';
import { Security } from './Security';
import { Portfolio } from './Portfolio';
import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class Deal {
  @Expose({ toClassOnly: true })
  uuid: string;

  @Expose()
  amount: number;

  @Expose()
  price: number;

  @Expose()
  brokerFee: number;

  @Expose()
  exchangeFee: number;

  @Type(() => Account)
  account: Account;

  @Type(() => Portfolio)
  portfolio: Portfolio;

  @Type(() => Security)
  security: Security;

  getTotal(): number {
    return -(this.amount * this.price) - this.brokerFee - this.exchangeFee;
  }
}
