import { Inject, Injectable } from '@angular/core';
import { CONFIG_TOKEN } from '../injection-tokens/config.token';
import { Config } from '../../../environments/Config';
import { HttpClient } from '@angular/common/http';
import { CreatePortfolioDTO } from '../DTOs/CreatePortfolioDTO';
import { Observable, ReplaySubject } from 'rxjs';
import { Portfolio } from '../entities/Portfolio';
import { PortfolioResponse } from '../entities/response/PortfolioResponse';
import { toClass } from '../libs/toClass';
import { tap } from 'rxjs/operators';
import { classToPlain } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private readonly portfolios$ = new ReplaySubject<Portfolio[]>(1);

  constructor(
    @Inject(CONFIG_TOKEN) private readonly config: Config,
    private readonly http: HttpClient,
  ) { }

  create(portfolio: CreatePortfolioDTO): Observable<Portfolio> {
    return this.http.post<PortfolioResponse>(`${this.config.host}/portfolio`, classToPlain(portfolio))
      .pipe(
        toClass(Portfolio),
        tap(() => this.loadPortfolios()),
      );
  }

  getPortfolios(): Observable<Portfolio[]> {
    return this.portfolios$.asObservable();
  }

  loadPortfolios(): void {
    this.http.get<PortfolioResponse[]>(`${this.config.host}/portfolio`).pipe(
      toClass(Portfolio),
      tap((portfolios: Portfolio[]) => this.portfolios$.next(portfolios)),
    )
      .subscribe();
  }

  getPortfolio(uuid: string): Observable<Portfolio> {
    return this.http.get<PortfolioResponse>(`${this.config.host}/portfolio/${uuid}`)
      .pipe(
        toClass(Portfolio),
      );
  }

}
