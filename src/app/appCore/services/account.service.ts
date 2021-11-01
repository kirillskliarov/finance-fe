import { Inject, Injectable } from '@angular/core';
import { CONFIG_TOKEN } from '../injection-tokens/config.token';
import { Config } from '../../../environments/Config';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { toClass } from '../libs/toClass';
import { AccountResponse } from '../entities/response/AccountResponse';
import { Account } from '../entities/Account';
import { CreateAccountDTO } from '../DTOs/CreateAccountDTO';
import { delay, tap } from 'rxjs/operators';
import { classToPlain } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly accounts$ = new ReplaySubject<Account[]>(1);

  constructor(
    @Inject(CONFIG_TOKEN) private readonly config: Config,
    private readonly http: HttpClient,
  ) { }

  create(account: CreateAccountDTO): Observable<Account> {
    return this.http.post<AccountResponse>(`${this.config.host}/account`, classToPlain(account))
      .pipe(
        toClass(Account),
        tap(() => this.loadAccounts()),
      );
  }

  getAccounts(): Observable<Account[]> {
    return this.accounts$.asObservable();
  }

  loadAccounts(): void {
    this.http.get<AccountResponse[]>(`${this.config.host}/account`).pipe(
      toClass(Account),
      tap((accounts: Account[]) => this.accounts$.next(accounts)),
    ).subscribe();
  }
}
