import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfotiosRoutingModule } from './portfotios-routing.module';
import { PortfotiosComponent } from './portfotios.component';


@NgModule({
  declarations: [
    PortfotiosComponent
  ],
  imports: [
    CommonModule,
    PortfotiosRoutingModule
  ]
})
export class PortfotiosModule { }
