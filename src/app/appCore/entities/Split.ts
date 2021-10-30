import { DateTime } from 'luxon';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { Security } from './Security';
import { dateTimeTransformer } from '../libs/dateTimeTransformer';

@Exclude()
export class Split {
  @Expose({ toClassOnly: true })
  uuid: string;

  @Expose()
  @Transform(dateTimeTransformer)
  date: DateTime;

  @Expose()
  value: number;

  @Type(() => Security)
  security: Security;
}