import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../../appCore/entities/Session';
import { ISession } from '../../appCore/entities/response/ISession';
import { CONFIG_TOKEN } from '../../appCore/injection-tokens/config.token';
import { Config } from '../../../environments/Config';
import { ResponseData } from '../../appCore/entities/ResponseData';
import { delay, map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { environment } from '../../../environments/environment';
import { AuthModule } from '../auth.module';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    @Inject(CONFIG_TOKEN) private readonly config: Config,
    private readonly http: HttpClient,
  ) { }

  login(username: string, password: string): Observable<Session> {
    return this.http.post<ISession>(`${environment.host}/user/login`, {
      username,
      password,
    }).pipe(
      // map((responseData: ResponseData<ISession>) => responseData.data),
      map((data: ISession) => plainToClass(Session, data)),
    );
  }

  register(username: string, password: string): Observable<Session> {
    return this.http.post<ISession>(`${environment.host}/user`, {
      username,
      password,
    }).pipe(
      delay(500),
      // map((responseData: ResponseData<ISession>) => responseData.data),
      map((data: ISession) => plainToClass(Session, data)),
    );
  }
}
