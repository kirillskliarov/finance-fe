import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateinputComponent } from './dateinput.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    DateinputComponent,
  ],
  exports: [
    DateinputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ]
})
export class DateinputModule { }
