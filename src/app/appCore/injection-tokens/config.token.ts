import { InjectionToken } from '@angular/core';
import { Config } from '../../../environments/Config';
import { environment } from '../../../environments/environment';

export const CONFIG_TOKEN: InjectionToken<Config> = new InjectionToken<Config>('CONFIG', {
  providedIn: 'root',
  factory: () => environment,
});
