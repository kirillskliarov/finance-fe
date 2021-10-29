import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AccountService } from '../../appCore/services/account.service';
import { Broker } from '../../appCore/entities/Broker';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrokerService } from '../../appCore/services/broker.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateAccountComponent implements OnInit {
  brokers: Broker[];
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

    this.brokerService.getAll().subscribe((brokers: Broker[]) => {
      this.brokers = brokers;
      this.cdr.markForCheck();
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
