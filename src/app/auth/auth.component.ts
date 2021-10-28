import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionService } from '../appCore/services/session.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  path$: Observable<string>;
  links = [
    { title: 'Register', url: 'register' },
    { title: 'Login', url: 'login' },
  ];

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.path$ = this.route.children[0].url.pipe(
      map((urlSegment: UrlSegment[]) => urlSegment[0]?.path),
    );
  }

}
