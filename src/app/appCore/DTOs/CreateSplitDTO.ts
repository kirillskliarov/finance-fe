import { Exclude, Expose, Transform } from 'class-transformer';
import { dateTimeTransformer } from '../libs/dateTimeTransformer';
import { DateTime } from 'luxon';
import { entityTransformer } from '../libs/entityTransformer';
import { Security } from '../entities/Security';

@Exclude()
export class CreateSplitDTO {
  @Expose()
  @Transform(dateTimeTransformer)
  dateTime: DateTime;

  @Expose()
  value: number;

  @Transform(entityTransformer)
  @Expose()
  security: Security;
}
