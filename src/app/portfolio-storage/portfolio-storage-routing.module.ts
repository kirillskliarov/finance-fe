import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioStorageComponent } from './portfolio-storage.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioStorageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioStorageRoutingModule { }
