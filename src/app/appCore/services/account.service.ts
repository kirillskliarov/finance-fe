import { Inject, Injectable } from '@angular/core';
import { CONFIG_TOKEN } from '../injection-tokens/config.token';
import { Config } from '../../../environments/Config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { toClass } from '../libs/toClass';
import { AccountResponse } from '../entities/response/AccountResponse';
import { Account } from '../entities/Account';
import { CreateAccountDTO } from '../DTOs/CreateAccountDTO';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    @Inject(CONFIG_TOKEN) private readonly config: Config,
    private readonly http: HttpClient,
  ) { }

  create(account: CreateAccountDTO): Observable<Account> {
    return this.http.post<AccountResponse>(`${this.config.host}/account`, account).pipe(
      toClass(Account),
      delay(3000),
    );
  }

  getAll(): Observable<Account> {
    return this.http.get<AccountResponse>(`${this.config.host}/account`).pipe(
      toClass(Account),
    );
  }
}
