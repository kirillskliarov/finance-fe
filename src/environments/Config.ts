import { ExchangeConfigs } from './exchanges/ExchangeConfigs';
import { BrokerConfigs } from './brokers/BrokerConfigs';

export interface Config {
  readonly production: boolean;
  readonly host: string;
  readonly storageSessionKey: string;
  readonly exchanges: ExchangeConfigs;
  readonly brokers: BrokerConfigs;
}
