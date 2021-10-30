import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PortfolioService } from '../appCore/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfoliosComponent implements OnInit {

  constructor(
    private readonly portfolioService: PortfolioService,
  ) { }

  ngOnInit(): void {
  }

}
