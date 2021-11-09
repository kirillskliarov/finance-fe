import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SecurityStorageService } from '../appCore/services/security-storage.service';
import { PortfolioStorage } from '../appCore/entities/PortfolioStorage';
import { filter, map } from 'rxjs/operators';
import { SecurityStorage } from '../appCore/entities/SecurityStorage';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-portfolio-storage',
  templateUrl: './portfolio-storage.component.html',
  styleUrls: ['./portfolio-storage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioStorageComponent implements OnInit {

  portfolioStorage: PortfolioStorage;
  uuid: string;
  columnDefs: ColDef[] = [
    { field: 'security' },
    { field: 'amount' },
  ];

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly route: ActivatedRoute,
    private readonly securityStorageService: SecurityStorageService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((paramMap: ParamMap) => paramMap.get('uuid') ?? ''),
      filter((uuid: string) => !!uuid),
    ).subscribe((uuid: string) => {
      this.uuid = uuid;
      this.loadPortfolioStorage();
    });
  }

  loadPortfolioStorage(): void {
    this.securityStorageService.getPortfolioStorage(this.uuid)
      .subscribe((portfolioStorage: PortfolioStorage) => {
        this.portfolioStorage = portfolioStorage;
        this.cdr.markForCheck();
        console.log(this.portfolioStorage);
      });
  }
}
