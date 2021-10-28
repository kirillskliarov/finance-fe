import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE_TOKEN } from '../injection-tokens/local-storage.token';
import { BehaviorSubject, Observable } from 'rxjs';
import { Session } from '../entities/Session';
import { map } from 'rxjs/operators';
import { classToPlain, plainToClass } from 'class-transformer';
import { CONFIG_TOKEN } from '../injection-tokens/config.token';
import { Config } from '../../../environments/Config';
import { User } from '../entities/User';

@Injectable()
export class SessionService {
  private readonly session$: BehaviorSubject<Session | null> = new BehaviorSubject<Session | null>(null);

  constructor(
    @Inject(CONFIG_TOKEN) private readonly config: Config,
    @Inject(LOCAL_STORAGE_TOKEN) private readonly storage: Storage,
  ) {
  }

  init(): void {
    const stringifiedSession = this.storage.getItem(this.config.storageSessionKey);
    const plainSession = JSON.parse(stringifiedSession ?? '')
    const session = plainToClass(Session, plainSession);
    this.session$.next(session);
    // TODO implement subscription on change localstorage in other tab
  }

  getSession(): Observable<Session | null> {
    return this.session$.asObservable();
  }

  getUser(): Observable<User | null> {
    return this.session$.asObservable().pipe(
      map((session: Session | null) => session?.user ?? null),
    );
  }

  getSessionUUID(): Observable<string | null> {
    return this.session$.asObservable().pipe(
      map((session: Session | null) => session?.uuid ?? null),
    );
  }

  isLoggedIn(): Observable<boolean> {
    return this.session$.asObservable().pipe(
      map((session: Session | null) => !!session),
    );
  }

  setSession(session: Session): void {
    this.session$.next(session);
    const plainSession = classToPlain(session);
    this.storage.setItem(this.config.storageSessionKey, JSON.stringify(plainSession));
  }

  logout(): void {
    this.session$.next(null);
    this.storage.removeItem(this.config.storageSessionKey);
  }
}
