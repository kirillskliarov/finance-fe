import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../appCore/services/portfolio.service';
import { Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';
import { Portfolio } from '../../appCore/entities/Portfolio';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioListComponent implements OnInit {
  portfolios$: Observable<Portfolio[]>
  columnDefs: ColDef[] = [
    { field: 'name' },
  ];

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly portfolioService: PortfolioService,
  ) { }

  ngOnInit(): void {
    this.portfolios$ = this.portfolioService.getPortfolios();
    this.portfolioService.loadPortfolios();
  }

}
