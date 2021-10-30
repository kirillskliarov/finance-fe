import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealsRoutingModule } from './deals-routing.module';
import { DealsComponent } from './deals.component';
import { CreateDealComponent } from './create-deal/create-deal.component';


@NgModule({
  declarations: [
    DealsComponent,
    CreateDealComponent
  ],
  imports: [
    CommonModule,
    DealsRoutingModule
  ]
})
export class DealsModule { }
