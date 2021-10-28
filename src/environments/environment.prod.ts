import { Config } from './Config';
import { common } from './common';

export const environment: Config = {
  ...common,
  production: true,
  host: 'http://localhost:3000',
};
