import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SecurityService } from '../../appCore/services/security.service';
import { DealService } from '../../appCore/services/deal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { plainToClass } from 'class-transformer';
import { CreateDealDTO } from '../../appCore/DTOs/CreateDealDTO';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-deal',
  templateUrl: './create-deal.component.html',
  styleUrls: ['./create-deal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateDealComponent implements OnInit {

  form: FormGroup;
  isPending: boolean = false;

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly securityService: SecurityService,
    private readonly dealService: DealService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      account: new FormControl(null, Validators.required),
      portfolio: new FormControl(null, Validators.required),
      security: new FormControl(null, Validators.required),
      currency: new FormControl(null, Validators.required),
      amount: new FormControl(0, Validators.required),
      price: new FormControl(0, Validators.required),
      brokerFee: new FormControl(0, Validators.required),
      exchangeFee: new FormControl(0, Validators.required),
    });
  }

  onSubmit(): void {
    if (this.form.value && !this.isPending) {
      this.isPending = true;
      const createDealDTO = plainToClass(CreateDealDTO, this.form.value);
      this.dealService.create(createDealDTO).pipe(
        finalize(() => {
          this.isPending = false;
          this.cdr.markForCheck();
        }),
      )
        .subscribe();
    }
  }
}
