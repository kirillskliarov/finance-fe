import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Deal } from '../appCore/entities/Deal';
import { CONFIG_TOKEN } from '../appCore/injection-tokens/config.token';
import { Config } from '../../environments/Config';
import { HttpClient } from '@angular/common/http';
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
