import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SecurityService } from '../../appCore/services/security.service';
import { DealService } from '../../appCore/services/deal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { plainToClass } from 'class-transformer';
import { CreateDealDTO } from '../../appCore/DTOs/CreateDealDTO';
import { finalize } from 'rxjs/operators';
import { Security } from '../../appCore/entities/Security';
import { AccountService } from '../../appCore/services/account.service';
import { PortfolioService } from '../../appCore/services/portfolio.service';
import { Observable } from 'rxjs';
import { Account } from '../../appCore/entities/Account';
import { Portfolio } from '../../appCore/entities/Portfolio';

@Component({
  selector: 'app-create-deal',
  templateUrl: './create-deal.component.html',
  styleUrls: ['./create-deal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateDealComponent implements OnInit {

  accounts$: Observable<Account[]>;
  portfolios$: Observable<Portfolio[]>;
  currencies: Security[];
  securitySearchFn: (input: string) => Observable<Security[]>;

  form: FormGroup;
  isPending: boolean = false;
  foundSecurities: Security[] = []

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly accountService: AccountService,
    private readonly portfolioService: PortfolioService,
    private readonly securityService: SecurityService,
    private readonly dealService: DealService,
  ) {
    this.accounts$ = this.accountService.getAccounts();
    this.portfolios$ = this.portfolioService.getPortfolios();
    this.securitySearchFn = (input: string) => {
      return this.securityService.find({
        secidLike: input,
      });
    };
  }

  ngOnInit(): void {
    this.accountService.loadAccounts();
    this.portfolioService.loadPortfolios();
    this.loadCurrencies();

    this.form = new FormGroup({
      date: new FormControl(null, Validators.required),
      time: new FormControl(null, Validators.required),
      account: new FormControl(null, Validators.required),
      portfolio: new FormControl(null, Validators.required),
      security: new FormControl(null, Validators.required),
      currency: new FormControl(null, Validators.required),
      amount: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      brokerFee: new FormControl('', Validators.required),
      exchangeFee: new FormControl('', Validators.required),
    });

    // @ts-ignore
    window.form = this.form;
  }

  onSubmit(): void {
    console.log(this.form.value);
    // if ((this.form.value && !this.isPending) || true) {
    //   this.isPending = true;
    //   const createDealDTO = plainToClass(CreateDealDTO, this.form.value);
    //   this.dealService.create(createDealDTO).pipe(
    //     finalize(() => {
    //       this.isPending = false;
    //       this.cdr.markForCheck();
    //     }),
    //   )
    //     .subscribe();
    // }
  }

  loadCurrencies(): void {
    this.securityService.getCurrencies()
      .subscribe((currencies: Security[]) => {
        this.currencies = currencies;
        this.cdr.markForCheck();
      });
  }

}
