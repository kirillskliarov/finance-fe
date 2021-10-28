import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProviders } from './interceptors/interceptorProviders';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
  ],
  providers: [
    ...interceptorProviders,
  ],
  exports: [
    HttpClientModule,
  ],
})
export class AppHttpModule { }
