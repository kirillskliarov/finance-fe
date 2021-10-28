import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AppHttpModule } from '../appCore/app-http/app-http.module';
import { SessionModule } from '../appCore/session/session.module';

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NgbNavModule,
    // SessionModule,
  ],
  providers: [
    AuthService,
  ],
})
export class AuthModule { }
