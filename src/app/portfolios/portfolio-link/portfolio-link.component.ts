import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { IAfterGuiAttachedParams, ICellRendererParams } from 'ag-grid-community';
import { Portfolio } from '../../appCore/entities/Portfolio';

@Component({
  selector: 'app-portfolio-link',
  templateUrl: './portfolio-link.component.html',
  styleUrls: ['./portfolio-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioLinkComponent implements OnInit, AgRendererComponent {
  data: Portfolio;
  constructor() { }

  ngOnInit(): void {
  }

  afterGuiAttached(params?: IAfterGuiAttachedParams): void {
  }

  agInit(params: ICellRendererParams): void {
    this.data = params.data;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
