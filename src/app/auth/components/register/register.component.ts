import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { finalize } from 'rxjs/operators';
import { Session } from '../../../appCore/entities/Session';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  isPending: boolean = false;

  constructor(
    private readonly authService: AuthService,
    private readonly cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.form.valid && !this.isPending) {
      this.isPending = true;
      this.authService.register(
        this.form.controls.username.value,
        this.form.controls.password.value
      ).pipe(
        finalize(() => {
          this.isPending = false;
          this.cdr.markForCheck();
        }),
      ).subscribe(
        (session: Session) => {
          console.log(session.user.username);
        },
      );
    }
  }
}
