import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioStorageRoutingModule } from './portfolio-storage-routing.module';
import { PortfolioStorageComponent } from './portfolio-storage.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    PortfolioStorageComponent
  ],
  imports: [
    CommonModule,
    PortfolioStorageRoutingModule,
    AgGridModule
  ]
})
export class PortfolioStorageModule { }
