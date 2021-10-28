import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidePanelComponent } from './side-panel.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidePanelComponent
  ],
  exports: [
    SidePanelComponent
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    RouterModule
  ]
})
export class SidePanelModule { }
