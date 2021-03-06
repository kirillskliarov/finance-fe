import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataInterceptor } from './data.interceptor';
import { TokenInterceptor } from './token.interceptor';

export const interceptorProviders: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: DataInterceptor,
  },
  {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: TokenInterceptor,
  },
];
