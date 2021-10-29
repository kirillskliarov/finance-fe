import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PortfolioService } from '../appCore/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent implements OnInit {

  constructor(
    private readonly portfolioService: PortfolioService,
  ) { }

  ngOnInit(): void {
  }

}
