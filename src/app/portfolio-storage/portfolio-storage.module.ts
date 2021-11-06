import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioStorageRoutingModule } from './portfolio-storage-routing.module';
import { PortfolioStorageComponent } from './portfolio-storage.component';


@NgModule({
  declarations: [
    PortfolioStorageComponent
  ],
  imports: [
    CommonModule,
    PortfolioStorageRoutingModule
  ]
})
export class PortfolioStorageModule { }
