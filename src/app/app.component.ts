import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SessionService } from './appCore/services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit{
  title = 'finance-fe';

  constructor(
    private readonly sessionService: SessionService,
  ) {
  }

  ngOnInit() {
  }
}
