import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SplitService } from '../../appCore/services/split.service';
import { Split } from '../../appCore/entities/Split';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-split-list',
  templateUrl: './split-list.component.html',
  styleUrls: ['./split-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitListComponent implements OnInit {
  splits: Split[]
  columnDefs: ColDef[] = [
    { field: 'dateTime' },
    { field: 'value' },
    { field: 'security' },
  ];

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly splitService: SplitService,
  ) { }

  ngOnInit(): void {
    this.loadSplits();
    this.splitService.getCreatedSplit().subscribe(() => {
      this.loadSplits();
    })
  }

  loadSplits(): void {
    this.splitService.getAll().subscribe((splits: Split[]) => {
      this.splits = splits;
      this.cdr.markForCheck();
    });
  }
}
