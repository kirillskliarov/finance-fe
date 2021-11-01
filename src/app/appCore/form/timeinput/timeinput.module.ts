import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeinputComponent } from './timeinput.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    TimeinputComponent
  ],
  exports: [
    TimeinputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ]
})
export class TimeinputModule { }
