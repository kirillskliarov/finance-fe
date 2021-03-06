import { Exclude, Expose, Type } from 'class-transformer';
import { Account } from './Account';

@Exclude()
export class Broker {
  @Expose()
  uuid: string;

  @Expose()
  name: string;

  @Type(() => Account)
  accounts: Account[];

  toString(): string {
    return this.name;
  }
}
