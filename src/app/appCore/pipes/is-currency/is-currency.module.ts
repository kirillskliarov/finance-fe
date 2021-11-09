import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsCurrencyPipe } from './is-currency.pipe';

@NgModule({
  declarations: [
    IsCurrencyPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    IsCurrencyPipe,
  ],
})
export class IsCurrencyModule { }
