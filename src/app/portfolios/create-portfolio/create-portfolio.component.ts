import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../appCore/services/portfolio.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { CreatePortfolioDTO } from '../../appCore/DTOs/CreatePortfolioDTO';
import { plainToClass } from 'class-transformer';

@Component({
  selector: 'app-create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatePortfolioComponent implements OnInit {

  form: FormGroup;
  isPending: boolean = false;
  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly portfolioService: PortfolioService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.form.valid && !this.isPending) {
      this.isPending = true;
      const portfolioDTO: CreatePortfolioDTO = plainToClass(CreatePortfolioDTO, this.form.value);

      this.portfolioService.create(portfolioDTO)
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
