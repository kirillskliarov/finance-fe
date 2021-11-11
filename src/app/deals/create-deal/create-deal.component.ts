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
import { BrokerFeeService } from '../../appCore/services/fee/broker-fee.service';
import { MoexFeeService } from '../../appCore/services/fee/moex-fee.service';
import { Broker } from '../../appCore/entities/Broker';

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
    private readonly brokerFee: BrokerFeeService,
    private readonly moexFee: MoexFeeService,
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

    this.form.controls.pricePerUnit.valueChanges.subscribe(() => this.calculatePrice());
    this.form.controls.amount.valueChanges.subscribe(() => this.calculatePrice());
    this.form.controls.price.valueChanges.subscribe(() => {
      this.calculateBrokerFee();
      this.calculateExchangeFee();
    });
    this.form.controls.security.valueChanges.subscribe(() => {
      this.calculateBrokerFee();
      this.calculateExchangeFee();
    });
    this.form.controls.account.valueChanges.subscribe(() => this.calculateBrokerFee());
    this.form.controls.isByOne.valueChanges.subscribe(() => this.calculateExchangeFee());
  }

  onSubmit(): void {
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

  private calculatePrice(): void {
    const amount = this.form.controls.amount.value;
    const pricePerUnit = this.form.controls.pricePerUnit.value;
    const price = isNumeric(pricePerUnit) && isNumeric(amount) ? amount * pricePerUnit : null;
    this.form.controls.price.setValue(price);
    this.form.controls.price.updateValueAndValidity();
  }

  private calculateBrokerFee(): void {
    const summ = this.form.controls.price.value;
    const security = <Security>this.form.controls.security.value;
    const broker = (<Account>this.form.controls.account.value)?.broker;

    if (isNumeric(summ) && security && broker) {
      const brokerFee = this.brokerFee.getFee({
        summ,
        security,
        broker,
      });

      if (isNumeric(brokerFee)) {
        this.form.controls.brokerFee.setValue(brokerFee);
        this.form.controls.brokerFee.updateValueAndValidity();
      }
    } else {
      this.form.controls.brokerFee.setValue(null);
      this.form.controls.brokerFee.updateValueAndValidity();
    }
  }

  private calculateExchangeFee(): void {
    const summ = this.form.controls.price.value;
    const count = this.form.controls.amount.value;
    const security = <Security>this.form.controls.security.value;
    const isByOne = this.form.controls.isByOne.value;

    if (isNumeric(summ) && isNumeric(count) && security) {
      const moexFee = this.moexFee.getFee({
        summ,
        security,
        isByOne,
        count,
      });

      this.form.controls.exchangeFee.setValue(moexFee);
      this.form.controls.exchangeFee.updateValueAndValidity();
    } else {
      this.form.controls.exchangeFee.setValue(null);
      this.form.controls.exchangeFee.updateValueAndValidity();
    }
  }
}
