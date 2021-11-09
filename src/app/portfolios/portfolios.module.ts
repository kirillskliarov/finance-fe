import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfoliosRoutingModule } from './portfolios-routing.module';
import { PortfoliosComponent } from './portfolios.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { CreatePortfolioComponent } from './create-portfolio/create-portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { PortfolioLinkComponent } from './portfolio-link/portfolio-link.component';


@NgModule({
  declarations: [
    PortfoliosComponent,
    PortfolioListComponent,
    CreatePortfolioComponent,
    PortfolioLinkComponent,
  ],
  imports: [
    CommonModule,
    PortfoliosRoutingModule,
    ReactiveFormsModule,
    AgGridModule
  ]
})
export class PortfoliosModule { }
