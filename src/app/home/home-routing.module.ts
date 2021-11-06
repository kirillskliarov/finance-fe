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
        loadChildren: () => import('../portfolios/portfolios.module').then(m => m.PortfoliosModule),
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
        path: 'broker',
        loadChildren: () => import('../broker/broker.module').then(m => m.BrokerModule),
      },
      {
        path: 'security',
        loadChildren: () => import('../security/security.module').then(m => m.SecurityModule),
      },
      {
        path: 'split',
        loadChildren: () => import('../split/split.module').then(m => m.SplitModule),
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
