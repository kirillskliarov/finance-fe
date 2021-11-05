import { Exclude, Expose, Transform } from 'class-transformer';
import { DateTime } from 'luxon';
import { dateTimeTransformer } from '../libs/dateTimeTransformer';
import { Security } from '../entities/Security';
import { Account } from '../entities/Account';
import { Portfolio } from '../entities/Portfolio';
import { entityTransformer } from '../libs/entityTransformer';

@Exclude()
export class CreateDealDTO {
  @Expose()
  amount: number;
  @Expose()
  @Transform(dateTimeTransformer)
  dateTime: DateTime;
  @Expose()
  price: number;
  @Expose()
  brokerFee: number;
  @Expose()
  exchangeFee: number;
  @Transform(entityTransformer)
  @Expose()
  security: Security;
  @Transform(entityTransformer)
  @Expose()
  currency: Security;
  @Transform(entityTransformer)
  @Expose()
  account: Account;
  @Transform(entityTransformer)
  @Expose()
  portfolio: Portfolio;
}
