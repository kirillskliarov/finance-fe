import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'portfolios',
        loadChildren: () => import('../portfolio/portfolio.module').then(m => m.PortfolioModule),
      },
      {
        path: 'accounts',
        loadChildren: () => import('../accounts/accounts.module').then(m => m.AccountsModule),
      },
      {
        path: 'deals',
        loadChildren: () => import('../deals/deals.module').then(m => m.DealsModule),
      },
      {
        path: '',
        redirectTo: 'portfolios',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
