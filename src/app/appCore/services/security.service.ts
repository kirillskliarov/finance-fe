import { Inject, Injectable } from '@angular/core';
import { CONFIG_TOKEN } from '../injection-tokens/config.token';
import { Config } from '../../../environments/Config';
import { HttpClient } from '@angular/common/http';
import { FindSecurityRequest } from '../requests/FindSecurityRequest';
import { Observable, Subject } from 'rxjs';
import { Security } from '../entities/Security';
import { SecurityResponse } from '../entities/response/SecurityResponse';
import { toClass } from '../libs/toClass';
import { SecurityType } from '../entities/SecurityType';
import { CreateSecurityDTO } from '../DTOs/CreateSecurityDTO';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private readonly createdSecurity$ = new Subject<Security>();

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

  getCreatedSecurity(): Observable<Security> {
    return this.createdSecurity$.asObservable();
  }

  create(createSecurityDTO: CreateSecurityDTO): Observable<Security> {
    return this.http.post<SecurityResponse>(`${this.config.host}/security`, createSecurityDTO)
      .pipe(
        toClass(Security),
        tap((security: Security) => this.createdSecurity$.next(security)),
      );
  }

  getCurrencies(): Observable<Security[]> {
    return this.find({
      type: SecurityType.CURRENCY,
    });
  }
}
