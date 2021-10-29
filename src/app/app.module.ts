import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appInitializer } from './appCore/app-initializer';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProviders } from './appCore/interceptors/interceptorProviders';
import { SessionService } from './appCore/services/session.service';
import { SidePanelModule } from './side-panel/side-panel.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SidePanelModule,
  ],
  providers: [
    ...interceptorProviders,
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
