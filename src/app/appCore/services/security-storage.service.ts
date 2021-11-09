import { Injectable } from '@angular/core';
import { SplitService } from './split.service';
import { combineLatest, Observable } from 'rxjs';
import { PortfolioStorage } from '../entities/PortfolioStorage';
import { map } from 'rxjs/operators';
import { Split } from '../entities/Split';
import { PortfolioService } from './portfolio.service';
import { Portfolio } from '../entities/Portfolio';
import { Deal } from '../entities/Deal';
import { SecurityStorage } from '../entities/SecurityStorage';
import { DealService } from './deal.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityStorageService {
  constructor(
    private readonly portfolioService: PortfolioService,
    private readonly dealService: DealService,
    private readonly splitService: SplitService,
  ) { }

  getPortfolioStorage(portfolioUUID: string): Observable<PortfolioStorage> {
    return combineLatest([
      this.portfolioService.getPortfolio(portfolioUUID),
      this.dealService.find({ portfolioUUID }),
      this.splitService.getAll(),
    ]).pipe(
      map(([portfolio, deals, splits]: [Portfolio, Deal[], Split[]]) => {
        const portfolioStorage = new PortfolioStorage(portfolio);

        deals.forEach((deal: Deal) => {
          let securityStorage = portfolioStorage.securityStorages
            .find(securityStorage => securityStorage.security.uuid === deal.security.uuid);
          if (!securityStorage) {
            securityStorage = new SecurityStorage(deal.security);
            portfolioStorage.securityStorages.push(securityStorage);
          }

          let amount = deal.amount;
          splits
            .filter((split: Split) => split.security.uuid === deal.security.uuid)
            .forEach((split: Split) => {
              if (deal.dateTime.toMillis() < split.dateTime.toMillis()) {
                amount = amount * split.value;
              }
            })
          ;
          securityStorage.amount = securityStorage.amount + amount;
        });
        return portfolioStorage;
      }),
    );
  }
}
