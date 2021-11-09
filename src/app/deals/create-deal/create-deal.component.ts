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
import { DateTime } from 'luxon';
import { isNumeric } from '../../appCore/libs/isNumeric';

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
      isByOne: new FormControl(false),
      currency: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required),
      pricePerUnit: new FormControl(null),
      price: new FormControl(null, Validators.required),
      brokerFee: new FormControl(null, Validators.required),
      exchangeFee: new FormControl(null, Validators.required),
    });

    this.form.controls.pricePerUnit.valueChanges.subscribe((pricePerUnit: number) => {
      const amount = this.form.controls.amount.value;
      this.writePrice({ pricePerUnit, amount });
    });

    this.form.controls.amount.valueChanges.subscribe((amount: number) => {
      const pricePerUnit = this.form.controls.pricePerUnit.value;
      this.writePrice({ pricePerUnit, amount });
    });

    // @ts-ignore
    window.form = this.form;
  }

  onSubmit(): void {
    if (true) {
      console.log(this.form);
      return;
    }
    if (this.form.value && !this.isPending) {
      this.isPending = true;
      const createDealDTO = plainToClass(
        CreateDealDTO,
        {
          ...this.form.value
        },
        { excludeExtraneousValues: true },
      );
      const { date, time } = this.form.value;
      createDealDTO.dateTime = DateTime.fromFormat(`${date} ${time}`, 'dd.MM.yyyy HH:mm');
      this.dealService.create(createDealDTO).pipe(
        finalize(() => {
          this.isPending = false;
          this.cdr.markForCheck();
        }),
      )
        .subscribe();
    }
  }

  loadCurrencies(): void {
    this.securityService.getCurrencies()
      .subscribe((currencies: Security[]) => {
        this.currencies = currencies;
        this.cdr.markForCheck();
      });
  }

  private writePrice({ pricePerUnit, amount }: { pricePerUnit: number | null; amount: number | null }): void {
    const price = isNumeric(pricePerUnit) && isNumeric(amount) ? amount * pricePerUnit : null;
    this.form.controls.price.setValue(price);
    this.form.controls.price.updateValueAndValidity();
  }
}
