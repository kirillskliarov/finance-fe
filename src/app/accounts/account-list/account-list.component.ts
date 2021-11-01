import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AccountService } from '../../appCore/services/account.service';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Account } from '../../appCore/entities/Account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountListComponent implements OnInit {
  accounts$: Observable<Account[]>
  columnDefs: ColDef[] = [
    { field: 'name' },
    { field: 'broker' },
  ];

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly accountService: AccountService,
  ) {
    this.accounts$ = this.accountService.getAccounts();
  }

  ngOnInit(): void {
    this.accountService.loadAccounts();
  }

}
