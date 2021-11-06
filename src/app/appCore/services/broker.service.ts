import { Inject, Injectable } from '@angular/core';
import { CONFIG_TOKEN } from '../injection-tokens/config.token';
import { Config } from '../../../environments/Config';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { toClass } from '../libs/toClass';
import { Broker } from '../entities/Broker';
import { BrokerResponse } from '../entities/response/BrokerResponse';
import { CreateBrokerDTO } from '../DTOs/CreateBrokerDTO';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BrokerService {
  private readonly createdBroker$ = new Subject<Broker>();

  constructor(
    @Inject(CONFIG_TOKEN) private readonly config: Config,
    private readonly http: HttpClient,
  ) { }

  getAll(): Observable<Broker[]> {
    return this.http.get<BrokerResponse[]>(`${this.config.host}/broker`).pipe(
      toClass(Broker),
    );
  }

  getCreatedBroker(): Observable<Broker> {
    return this.createdBroker$.asObservable();
  }

  create(createBrokerDTO: CreateBrokerDTO): Observable<Broker> {
    return this.http.post<BrokerResponse>(`${this.config.host}/broker`, createBrokerDTO).pipe(
      toClass(Broker),
      tap((broker: Broker) => this.createdBroker$.next(broker)),
    );
  }
}
