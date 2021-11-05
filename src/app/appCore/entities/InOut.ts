import { Account } from './Account';
import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class InOut {
  @Expose()
  uuid: string;

  @Expose()
  amount: number;

  @Expose()
  @Type(() => Account)
  account: Account;
}
