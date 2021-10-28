import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../entities/Session';
import { ISession } from '../entities/response/ISession';
import { CONFIG_TOKEN } from '../injection-tokens/config.token';
import { Config } from '../../../environments/Config';
import { toClass } from '../libs/toClass';
import { SessionService } from './session.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    @Inject(CONFIG_TOKEN) private readonly config: Config,
    private readonly http: HttpClient,
    private readonly sessionService: SessionService,
  ) { }

  login(username: string, password: string): Observable<Session> {
    return this.http.post<ISession>(`${this.config.host}/user/login`, {
      username,
      password,
    }).pipe(
      toClass(Session),
      tap(session => this.sessionService.setSession(session)),
    );
  }

  register(username: string, password: string): Observable<Session> {
    return this.http.post<ISession>(`${this.config.host}/user`, {
      username,
      password,
    }).pipe(
      toClass(Session),
      tap(session => this.sessionService.setSession(session)),
    );
  }
}
