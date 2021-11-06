import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfoliosComponent } from './portfolios.component';

const routes: Routes = [
  {
    path: '',
    component: PortfoliosComponent,
  },
  {
    path: ':uuid',
    loadChildren: () => import('../portfolio-storage/portfolio-storage.module')
      .then(m => m.PortfolioStorageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfoliosRoutingModule { }
