import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BrokerService } from '../../appCore/services/broker.service';
import { Broker } from '../../appCore/entities/Broker';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-broker-list',
  templateUrl: './broker-list.component.html',
  styleUrls: ['./broker-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrokerListComponent implements OnInit {
  brokers: Broker[];
  columnDefs: ColDef[] = [
    { field: 'name' },
  ];

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly brokerService: BrokerService,
  ) { }

  ngOnInit(): void {
    this.loadBrokers();
    this.brokerService.getCreatedBroker().subscribe(() => {
      this.loadBrokers();
    });
  }

  loadBrokers(): void {
    this.brokerService.getAll().subscribe((brokers: Broker[]) => {
      this.brokers = brokers;
      this.cdr.markForCheck();
    });
  }
}
