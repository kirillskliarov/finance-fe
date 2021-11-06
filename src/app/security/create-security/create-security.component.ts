import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SecurityService } from '../../appCore/services/security.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { plainToClass } from 'class-transformer';
import { finalize } from 'rxjs/operators';
import { CreateSecurityDTO } from '../../appCore/DTOs/CreateSecurityDTO';
import { SECURITY_TYPES } from '../../appCore/entities/SecurityType';

@Component({
  selector: 'app-create-security',
  templateUrl: './create-security.component.html',
  styleUrls: ['./create-security.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateSecurityComponent implements OnInit {

  form: FormGroup;
  isPending: boolean = false;
  securityTypes = SECURITY_TYPES;

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly securityService: SecurityService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      secid: new FormControl('', Validators.required),
      type: new FormControl(null, Validators.required),
    });
  }

  onSubmit(): void {
    if (this.form.valid && !this.isPending) {
      this.isPending = true;
      const createSecurityDTO: CreateSecurityDTO = plainToClass(
        CreateSecurityDTO,
        { ...this.form.value },
        { excludeExtraneousValues: true },
      );

      this.securityService.create(createSecurityDTO)
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
