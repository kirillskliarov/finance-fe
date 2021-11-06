import { Inject, Injectable } from '@angular/core';
import { CONFIG_TOKEN } from '../injection-tokens/config.token';
import { Config } from '../../../environments/Config';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { classToPlain } from 'class-transformer';
import { toClass } from '../libs/toClass';
import { tap } from 'rxjs/operators';
import { Split } from '../entities/Split';
import { SplitResponse } from '../entities/response/SplitResponse';
import { CreateSplitDTO } from '../DTOs/CreateSplitDTO';

@Injectable({
  providedIn: 'root'
})
export class SplitService {
  private readonly createdSplit$ = new Subject<Split>();

  constructor(
    @Inject(CONFIG_TOKEN) private readonly config: Config,
    private readonly http: HttpClient,
  ) { }

  create(createSplitDTO: CreateSplitDTO): Observable<Split> {
    return this.http.post<SplitResponse>(`${this.config.host}/split`, classToPlain(createSplitDTO)).pipe(
      toClass(Split),
      tap((split: Split) => this.createdSplit$.next(split)),
    );
  }

  getCreatedSplit(): Observable<Split> {
    return this.createdSplit$.asObservable();
  }

  getAll(): Observable<Split[]> {
    return this.http.get<SplitResponse[]>(`${this.config.host}/split`).pipe(
      toClass(Split),
    );
  }
}
