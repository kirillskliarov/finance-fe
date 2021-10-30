import { Inject, Injectable } from '@angular/core';
import { CONFIG_TOKEN } from '../injection-tokens/config.token';
import { Config } from '../../../environments/Config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FindSecurityRequest } from '../requests/FindSecurityRequest';
import { Observable } from 'rxjs';
import { Security } from '../entities/Security';
import { SecurityResponse } from '../entities/response/SecurityResponse';
import { toClass } from '../libs/toClass';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(
    @Inject(CONFIG_TOKEN) private readonly config: Config,
    private readonly http: HttpClient,
  ) { }

  find(find: FindSecurityRequest): Observable<Security[]> {
    return this.http.get<SecurityResponse[]>(`${this.config.host}/security`, {
      params: find,
    }).pipe(
      toClass<Security, FindSecurityRequest[]>(Security),
    );
  }

}
