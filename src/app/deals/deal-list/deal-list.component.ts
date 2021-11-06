import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DealService } from '../../appCore/services/deal.service';
import { Deal } from '../../appCore/entities/Deal';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DealListComponent implements OnInit {
  deals: Deal[];
  columnDefs: ColDef[] = [
    { field: 'dateTime' },
    { field: 'amount' },
    { field: 'price' },
    { field: 'brokerFee' },
    { field: 'exchangeFee' },
    { field: 'account' },
    { field: 'portfolio' },
    { field: 'security' },
    { field: 'currency' },
  ];

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly dealService: DealService,
  ) { }

  ngOnInit(): void {
    this.loadDeals();
    this.dealService.getCreatedDeal().subscribe(() => {
      this.loadDeals();
    });
  }

  loadDeals(): void {
    this.dealService.find().subscribe((deals: Deal[]) => {
      this.deals = deals;
      this.cdr.markForCheck();
    });
  }

}
