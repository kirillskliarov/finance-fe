import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DealService } from '../appCore/services/deal.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DealsComponent implements OnInit {
  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly dealService: DealService,
  ) { }

  ngOnInit(): void {
  }


}
