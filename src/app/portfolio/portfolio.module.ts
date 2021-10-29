import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioDataComponent } from './portfolio-data/portfolio-data.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioDataComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
