import { DateTime } from 'luxon';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { Security } from './Security';
import { dateTimeTransformer } from '../libs/dateTimeTransformer';

@Exclude()
export class Split {
  @Expose()
  uuid: string;

  @Expose()
  @Transform(dateTimeTransformer)
  dateTime: DateTime;

  @Expose()
  value: number;

  @Type(() => Security)
  @Expose()
  security: Security;
}
