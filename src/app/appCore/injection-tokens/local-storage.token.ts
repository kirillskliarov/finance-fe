import { inject, InjectionToken } from '@angular/core';
import { WINDOW_TOKEN } from './window.token';

export const LOCAL_STORAGE_TOKEN: InjectionToken<Storage> = new InjectionToken<Storage>('LOCAL_STORAGE', {
  providedIn: 'root',
  factory: () => {
    const win: Window = inject(WINDOW_TOKEN);
    return win.localStorage;
  },
});
