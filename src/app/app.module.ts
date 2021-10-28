import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHttpModule } from './appCore/app-http/app-http.module';
import { SessionModule } from './appCore/session/session.module';
import { appInitializer } from './appCore/app-initializer';
import { SessionService } from './appCore/session/session.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppHttpModule,
    SessionModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (sessionService: SessionService) => appInitializer(sessionService),
      deps: [SessionService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
