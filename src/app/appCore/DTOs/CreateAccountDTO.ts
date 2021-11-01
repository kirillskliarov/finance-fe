import { Expose, Transform } from 'class-transformer';
import { Broker } from '../entities/Broker';
import { entityToPlainTransformer } from '../libs/entityToPlainTransformer';

export class CreateAccountDTO {
  name: string;

  @Transform(entityToPlainTransformer, { toPlainOnly: true })
  @Expose({ name: 'brokerUUID', toPlainOnly: true })
  broker: Broker;
}
