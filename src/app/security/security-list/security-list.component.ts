import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SecurityService } from '../../appCore/services/security.service';
import { Security } from '../../appCore/entities/Security';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-security-list',
  templateUrl: './security-list.component.html',
  styleUrls: ['./security-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecurityListComponent implements OnInit {
  securities: Security[];
  columnDefs: ColDef[] = [
    { field: 'secid' },
    { field: 'type' },
  ];

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly securityService: SecurityService,
  ) { }

  ngOnInit(): void {
    this.loadSecurities();
    this.securityService.getCreatedSecurity().subscribe(() => {
      this.loadSecurities();
    });
  }

  loadSecurities(): void {
    this.securityService.find().subscribe((securities: Security[]) => {
      this.securities = securities;
      this.cdr.markForCheck();
    });
  }
}
