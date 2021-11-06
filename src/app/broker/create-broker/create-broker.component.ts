import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BrokerService } from '../../appCore/services/broker.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateAccountDTO } from '../../appCore/DTOs/CreateAccountDTO';
import { plainToClass } from 'class-transformer';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-broker',
  templateUrl: './create-broker.component.html',
  styleUrls: ['./create-broker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateBrokerComponent implements OnInit {
  form: FormGroup;
  isPending: boolean = false;

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly brokerService: BrokerService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.form.valid && !this.isPending) {
      this.isPending = true;
      const broker: CreateAccountDTO = plainToClass(CreateAccountDTO, {
        ...this.form.value,
      });
      this.brokerService.create(broker)
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
