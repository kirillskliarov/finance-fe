import { Expose, Transform } from 'class-transformer';
import { DateTime } from 'luxon';
import { dateTimeTransformer } from '../libs/dateTimeTransformer';
import { Security } from '../entities/Security';
import { Account } from '../entities/Account';
import { entityToPlainTransformer } from '../libs/entityToPlainTransformer';

@Expose()
export class CreateDealDTO {
  amount: string;
  @Transform(dateTimeTransformer)
  dateTime: DateTime;
  price: number;
  brokerFee: number;
  exchangeFee: number;
  @Transform(entityToPlainTransformer, { toPlainOnly: true })
  security: Security;
  @Transform(entityToPlainTransformer, { toPlainOnly: true })
  currency: Security;
  @Transform(entityToPlainTransformer, { toPlainOnly: true })
  account: Account;
}
