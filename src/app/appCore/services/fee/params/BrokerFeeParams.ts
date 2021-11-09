import { Broker } from '../../../entities/Broker';
import { Security } from '../../../entities/Security';

export interface BrokerFeeParams {
  broker: Broker,
  security: Security,
  summ: number,
}

export type SpecificBrokerFeeParams = Omit<BrokerFeeParams, 'broker'>;
