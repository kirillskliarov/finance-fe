import { User } from './User';
import { DateTime } from 'luxon';
import { Exclude, Expose, Transform } from 'class-transformer';
import { DateTimeClassTransformer } from '../libs/DateTimeClassTransformer';

@Exclude()
export class Session {
  @Expose({ toPlainOnly: true })
  uuid: string;

  @Expose()
  user: User;

  @Expose()
  @Transform(DateTimeClassTransformer.toClass, { toClassOnly: true })
  createdAt: DateTime;

  @Expose()
  @Transform(DateTimeClassTransformer.toClass, { toClassOnly: true })
  updatedAt: DateTime;
}
