import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SessionService } from '../appCore/services/session.service';
import { User } from '../appCore/entities/User';
import { Observable } from 'rxjs';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  path$: Observable<string>;
  user$: Observable<User | null>;
  public isLoggedIn$: Observable<boolean>;
  links = [
    { title: 'Portfolios', url: 'portfolios' },
    { title: 'Deals', url: 'deals' },
    { title: 'Accounts', url: 'accounts' },
  ];

  constructor(
    public readonly sessionService: SessionService,
    public readonly route: ActivatedRoute,
  ) {
    this.isLoggedIn$ = sessionService.isLoggedIn();
  }

  ngOnInit(): void {
    this.user$ = this.sessionService.getUser();
    this.path$ = this.route.children[0].url.pipe(
      map((urlSegment: UrlSegment[]) => urlSegment[0]?.path ?? ''),
    );
  }

}
