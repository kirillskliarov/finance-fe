import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../../appCore/entities/Session';
import { ISession } from '../../appCore/entities/response/ISession';
import { CONFIG_TOKEN } from '../../appCore/injection-tokens/config.token';
import { Config } from '../../../environments/Config';
import { toClass } from '../../appCore/libs/toClass';
import { SessionService } from '../../appCore/session/session.service';
import { tap } from 'rxjs/operators';

// TODO: move service to root, implement logout
@Injectable()
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
