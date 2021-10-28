import { User } from './User';
import { DateTime } from 'luxon';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { dateTimeTransformer } from '../libs/dateTimeTransformer';

@Exclude()
export class Session {
  @Expose({ toPlainOnly: true })
  uuid: string;

  @Expose()
  @Type(() => User)
  user: User;

  @Expose()
  @Transform(dateTimeTransformer)
  createdAt: DateTime;

  @Expose()
  @Transform(dateTimeTransformer)
  updatedAt: DateTime;
}
