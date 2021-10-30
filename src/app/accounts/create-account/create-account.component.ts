import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AccountService } from '../../appCore/services/account.service';
import { Broker } from '../../appCore/entities/Broker';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrokerService } from '../../appCore/services/broker.service';
import { CreateAccountDTO } from '../../appCore/DTOs/CreateAccountDTO';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateAccountComponent implements OnInit {
  brokers$: Observable<Broker[]>
  form: FormGroup;
  isPending: boolean = false;
  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly accountService: AccountService,
    private readonly brokerService: BrokerService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      broker: new FormControl(null, Validators.required),
    });

    this.brokers$ = this.brokerService.getAll();
  }

  onSubmit(): void {
    console.log('onSubmit');
    if (this.form.valid && !this.isPending) {
      console.log('set submitting');
      this.isPending = true;
      const account: CreateAccountDTO = {
        name: this.form.value.name,
        brokerUUID: this.form.value.broker?.uuid ?? null,
      }

      this.accountService.create(account)
        .pipe(
          finalize(() => {
            this.isPending = false;
            this.cdr.markForCheck();
          }),
        )
        .subscribe();
    }
  }
}
