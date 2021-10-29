import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private readonly sessionService: SessionService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.sessionService.getSessionSync()?.uuid ?? '';
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      }
    });

    return next.handle(authRequest);
  }
}
