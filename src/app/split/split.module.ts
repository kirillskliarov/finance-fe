import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplitRoutingModule } from './split-routing.module';
import { SplitComponent } from './split.component';
import { SplitListComponent } from './split-list/split-list.component';
import { CreateSplitComponent } from './create-split/create-split.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DateinputModule } from '../appCore/form/dateinput/dateinput.module';
import { TimeinputModule } from '../appCore/form/timeinput/timeinput.module';
import { TypeaheadModule } from '../appCore/form/typeahead/typeahead.module';
import { NumberinputModule } from '../appCore/form/numberinput/numberinput.module';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    SplitComponent,
    SplitListComponent,
    CreateSplitComponent
  ],
  imports: [
    CommonModule,
    SplitRoutingModule,
    ReactiveFormsModule,
    DateinputModule,
    TimeinputModule,
    TypeaheadModule,
    NumberinputModule,
    AgGridModule
  ]
})
export class SplitModule { }
