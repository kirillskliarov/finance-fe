import { Deal } from './Deal';
import { Exclude, Expose, Type } from 'class-transformer';
import { Split } from './Split';
import { SecurityType } from './SecurityType';

@Exclude()
export class Security {
  @Expose({ toClassOnly: true })
  uuid: string;

  @Expose()
  secid: string;

  @Expose()
  type: SecurityType;

  @Type(() => Deal)
  deals: Deal[];

  @Type(() => Split)
  splits: Split[];

  toString(): string {
    return this.secid;
  }
}
