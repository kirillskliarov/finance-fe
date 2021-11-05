import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealsRoutingModule } from './deals-routing.module';
import { DealsComponent } from './deals.component';
import { CreateDealComponent } from './create-deal/create-deal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from '../appCore/form/dropdown/dropdown.module';
import { TypeaheadModule } from '../appCore/form/typeahead/typeahead.module';
import { DateinputModule } from '../appCore/form/dateinput/dateinput.module';
import { TimeinputModule } from '../appCore/form/timeinput/timeinput.module';
import { NumberinputModule } from '../appCore/form/numberinput/numberinput.module';


@NgModule({
  declarations: [
    DealsComponent,
    CreateDealComponent
  ],
  imports: [
    CommonModule,
    DealsRoutingModule,
    ReactiveFormsModule,
    DropdownModule,
    TypeaheadModule,
    DateinputModule,
    TimeinputModule,
    NumberinputModule
  ]
})
export class DealsModule { }
