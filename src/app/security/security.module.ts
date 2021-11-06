import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { CreateSecurityComponent } from './create-security/create-security.component';
import { SecurityListComponent } from './security-list/security-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from '../appCore/form/dropdown/dropdown.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    SecurityComponent,
    CreateSecurityComponent,
    SecurityListComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule,
    DropdownModule,
    AgGridModule,
  ]
})
export class SecurityModule { }
