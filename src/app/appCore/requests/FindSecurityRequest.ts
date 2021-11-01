import { SecurityType } from '../entities/SecurityType';

export interface FindSecurityRequest {
  secidLike?: string;
  type?: SecurityType;
}
