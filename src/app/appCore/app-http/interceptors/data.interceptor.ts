import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpSentEvent, HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { ResponseData } from '../../entities/ResponseData';

@Injectable()
export class DataInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map((response: HttpEvent<ResponseData<any>>) => {
        if (response instanceof HttpResponse && response.body) {
          const data = response.body?.data ?? null;
          return response.clone({
            body: data,
          });
        }

        return response;
      }),
    );
  }
}
