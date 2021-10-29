import { Inject, Injectable } from '@angular/core';
import { CONFIG_TOKEN } from '../injection-tokens/config.token';
import { Config } from '../../../environments/Config';
import { HttpClient } from '@angular/common/http';
import { CreatePortfolioDTO } from '../DTOs/CreatePortfolioDTO';
import { Observable } from 'rxjs';
import { Portfolio } from '../entities/Portfolio';
import { PortfolioResponse } from '../entities/response/PortfolioResponse';
import { toClass } from '../libs/toClass';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(
    @Inject(CONFIG_TOKEN) private readonly config: Config,
    private readonly http: HttpClient,
  ) { }

  create(portfolio: CreatePortfolioDTO): Observable<Portfolio> {
    return this.http.post<PortfolioResponse>(`${this.config.host}/portfolio`, portfolio).pipe(
      toClass(Portfolio),
    );
  }

  getAll(): Observable<Portfolio[]> {
    return this.http.get<PortfolioResponse[]>(`${this.config.host}/portfolio`).pipe(
      toClass(Portfolio),
    );
  }

  findByUUID(uuid: string): Observable<Portfolio> {
    return this.http.get<PortfolioResponse>(`${this.config.host}/portfolio/${uuid}`).pipe(
      toClass(Portfolio),
    );
  }
}
