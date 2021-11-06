import { SecurityResponse } from './SecurityResponse';

export interface SplitResponse {
  uuid: string;
  dateTime: string;
  value: number;
  security: SecurityResponse;
}
