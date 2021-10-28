import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SessionService } from '../appCore/session/session.service';
import { User } from '../appCore/entities/User';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  user$: Observable<User | null>;

  constructor(
    public readonly sessionService: SessionService,
  ) { }

  ngOnInit(): void {
    this.user$ = this.sessionService.getUser();
  }

}
