import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccountsComponent,
    CreateAccountComponent,
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AccountsModule { }
