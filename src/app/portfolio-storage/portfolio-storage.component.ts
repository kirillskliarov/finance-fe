import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-storage',
  templateUrl: './portfolio-storage.component.html',
  styleUrls: ['./portfolio-storage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioStorageComponent implements OnInit {

  constructor(
    private readonly cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }

}
