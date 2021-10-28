import { InjectionToken } from '@angular/core';

export const WINDOW_TOKEN: InjectionToken<Window> = new InjectionToken<Window>('WINDOW', {
  providedIn: 'root',
  factory: () => window,
});
