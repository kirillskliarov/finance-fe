import { Exclude, Expose } from 'class-transformer';
import { SecurityType } from '../entities/SecurityType';

@Exclude()
export class CreateSecurityDTO {
  @Expose()
  secid: string;

  @Expose()
  type: SecurityType;
}
