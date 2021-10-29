import { Inject, Injectable } from '@angular/core';
import { CONFIG_TOKEN } from '../injection-tokens/config.token';
import { Config } from '../../../environments/Config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from '../entities/Portfolio';
import { PortfolioResponse } from '../entities/response/PortfolioResponse';
import { toClass } from '../libs/toClass';
import { Broker } from '../entities/Broker';
import { BrokerResponse } from '../entities/response/BrokerResponse';

@Injectable({
  providedIn: 'root'
})
export class BrokerService {

  constructor(
    @Inject(CONFIG_TOKEN) private readonly config: Config,
    private readonly http: HttpClient,
  ) { }

  getAll(): Observable<Broker[]> {
    return this.http.get<BrokerResponse[]>(`${this.config.host}/broker`).pipe(
      toClass(Broker),
    );
  }
}
