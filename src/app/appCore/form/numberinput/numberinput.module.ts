import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberinputComponent } from './numberinput.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NumberinputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    NumberinputComponent,
  ],
})
export class NumberinputModule { }
