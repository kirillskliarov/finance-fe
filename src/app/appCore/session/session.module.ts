import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionService } from './session.service';

// TODO move SessionService to root, get rid of SessionModule
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    SessionService,
  ],
})
export class SessionModule {}
