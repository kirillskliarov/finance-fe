import { Exclude, Expose, Type } from 'class-transformer';
import { Broker } from './Broker';
import { Deal } from './Deal';
import { InOut } from './InOut';
import { Tax } from './Tax';

@Exclude()
export class Account {
  @Expose({ toClassOnly: true })
  uuid: string;

  @Expose()
  name: string;

  @Expose()
  @Type(() => Broker)
  broker: Broker;

  @Type(() => Broker)
  deals: Deal[];

  @Type(() => InOut)
  inOuts: InOut[];

  @Type(() => Tax)
  taxes: Tax[];

  toString(): string {
    return this.name;
  }
}
