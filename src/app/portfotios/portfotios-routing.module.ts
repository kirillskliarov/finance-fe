import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfotiosComponent } from './portfotios.component';

const routes: Routes = [
  {
    path: '',
    component: PortfotiosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfotiosRoutingModule { }
