import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BrokerService } from '../../appCore/services/broker.service';

@Component({
  selector: 'app-broker-list',
  templateUrl: './broker-list.component.html',
  styleUrls: ['./broker-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrokerListComponent implements OnInit {

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly brokerService: BrokerService,
  ) { }

  ngOnInit(): void {
  }

}
