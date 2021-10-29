import { BrokerResponse } from './BrokerResponse';

export interface AccountResponse {
  uuid: string;
  name: string;
  broker: BrokerResponse;
}
