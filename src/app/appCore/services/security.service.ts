import { Inject, Injectable } from '@angular/core';
import { CONFIG_TOKEN } from '../injection-tokens/config.token';
import { Config } from '../../../environments/Config';
import { HttpClient } from '@angular/common/http';
import { FindSecurityRequest } from '../requests/FindSecurityRequest';
import { Observable, ReplaySubject } from 'rxjs';
import { Security } from '../entities/Security';
import { SecurityResponse } from '../entities/response/SecurityResponse';
import { toClass } from '../libs/toClass';
import { delay, map } from 'rxjs/operators';
import { SecurityType } from '../entities/SecurityType';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  constructor(
    @Inject(CONFIG_TOKEN) private readonly config: Config,
    private readonly http: HttpClient,
  ) { }

  find(find: FindSecurityRequest = {}): Observable<Security[]> {
    return this.http.get<SecurityResponse[]>(`${this.config.host}/security`, {
      params: find as Record<string, string>,
    }).pipe(
      toClass<Security, SecurityResponse[]>(Security),
    );
  }

  getCurrencies(): Observable<Security[]> {
    return this.find({
      type: SecurityType.CURRENCY,
    });
  }
}
