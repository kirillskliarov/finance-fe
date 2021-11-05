import { Account } from './Account';
import { Security } from './Security';
import { Portfolio } from './Portfolio';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { DateTime } from 'luxon';
import { dateTimeTransformer } from '../libs/dateTimeTransformer';

@Exclude()
export class Deal {
  @Expose()
  uuid: string;

  @Expose()
  @Transform(dateTimeTransformer)
  dateTime: DateTime;

  @Expose()
  amount: number;

  @Expose()
  price: number;

  @Expose()
  brokerFee: number;

  @Expose()
  exchangeFee: number;

  @Type(() => Account)
  @Expose()
  account: Account;

  @Type(() => Portfolio)
  @Expose()
  portfolio: Portfolio;

  @Type(() => Security)
  @Expose()
  security: Security;

  @Type(() => Security)
  @Expose()
  currency: Security;

  getTotal(): number {
    return -(this.amount * this.price) - this.brokerFee - this.exchangeFee;
  }
}
