import { Inject, Injectable } from '@angular/core';
import { CONFIG_TOKEN } from '../injection-tokens/config.token';
import { Config } from '../../../environments/Config';
import { HttpClient } from '@angular/common/http';
import { CreateDealDTO } from '../DTOs/CreateDealDTO';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Deal } from '../entities/Deal';
import { DealResponse } from '../entities/response/DealResponse';
import { classToPlain, plainToClass } from 'class-transformer';
import { toClass } from '../libs/toClass';
import { tap } from 'rxjs/operators';
import { FindDealRequest } from '../requests/FindDealRequest';

@Injectable({
  providedIn: 'root'
})
export class DealService {
  private readonly createdDeal$ = new Subject<Deal>();

  constructor(
    @Inject(CONFIG_TOKEN) private readonly config: Config,
    private readonly http: HttpClient,
  ) { }

  create(create: CreateDealDTO): Observable<Deal> {
    return this.http.post<DealResponse>(`${this.config.host}/deal`, classToPlain(create)).pipe(
      toClass(Deal),
      tap((deal: Deal) => this.createdDeal$.next(deal)),
    )
  }

  getCreatedDeal(): Observable<Deal> {
    return this.createdDeal$.asObservable();
  }

  find(findPortfolioRequest: FindDealRequest = {}): Observable<Deal[]> {
    return this.http.get<DealResponse[]>(
      `${this.config.host}/deal`,
      { params: findPortfolioRequest as Record<string, string> },
    ).pipe(
      toClass(Deal),
    );
  }
}
