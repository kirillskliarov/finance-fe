import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeaheadComponent } from './typeahead.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TypeaheadComponent
  ],
  exports: [
    TypeaheadComponent
  ],
  imports: [
    CommonModule,
    NgbTypeaheadModule,
    FormsModule
  ]
})
export class TypeaheadModule { }
