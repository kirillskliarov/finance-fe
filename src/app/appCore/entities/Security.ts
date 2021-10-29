import { Deal } from './Deal';
import { Exclude, Expose, Type } from 'class-transformer';
import { Split } from './Split';

@Exclude()
export class Security {
  @Expose({ toClassOnly: true })
  uuid: string;

  @Expose()
  secid: string;

  @Type(() => Deal)
  deals: Deal[];

  @Type(() => Split)
  splits: Split[];
}
