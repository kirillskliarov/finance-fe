import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SplitService } from '../../appCore/services/split.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Security } from '../../appCore/entities/Security';
import { SecurityService } from '../../appCore/services/security.service';
import { plainToClass } from 'class-transformer';
import { DateTime } from 'luxon';
import { finalize } from 'rxjs/operators';
import { CreateSplitDTO } from '../../appCore/DTOs/CreateSplitDTO';

@Component({
  selector: 'app-create-split',
  templateUrl: './create-split.component.html',
  styleUrls: ['./create-split.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateSplitComponent implements OnInit {

  securitySearchFn: (input: string) => Observable<Security[]>;
  form: FormGroup;
  isPending: boolean = false;

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly splitService: SplitService,
    private readonly securityService: SecurityService,
  ) {
    this.securitySearchFn = (input: string) => {
      return this.securityService.find({
        secidLike: input,
      });
    };
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      date: new FormControl(null, Validators.required),
      time: new FormControl(null, Validators.required),
      value: new FormControl(null, Validators.required),
      security: new FormControl(null, Validators.required),
    });
  }

  onSubmit(): void {
    if (this.form.value && !this.isPending) {
      this.isPending = true;
      const createSplitDTO = plainToClass(
        CreateSplitDTO,
        {
          ...this.form.value
        },
        { excludeExtraneousValues: true },
      );
      const { date, time } = this.form.value;
      createSplitDTO.dateTime = DateTime.fromFormat(`${date} ${time}`, 'dd.MM.yyyy HH:mm');
      this.splitService.create(createSplitDTO).pipe(
        finalize(() => {
          this.isPending = false;
          this.cdr.markForCheck();
        }),
      )
        .subscribe();
    }
  }
}
