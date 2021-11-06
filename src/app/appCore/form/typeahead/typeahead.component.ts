import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, of, OperatorFunction } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TypeaheadComponent,
    multi: true,
  }],
})
export class TypeaheadComponent implements OnInit, ControlValueAccessor {
  @Input()
  label: string = 'Type item';
  @Input()
  minimumChars: number = 1;
  @Input()
  searchFn: (input: string) => Observable<any[]>;

  onChangeFn: (value: any) => void;
  onTouchedFn: () => void;
  query: string;
  value: any | null;
  singleResult: any | null;
  disabled: boolean;
  search: OperatorFunction<string, any[]>;

  constructor(
    private readonly cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.search = (text$: Observable<string>) => {
      return text$.pipe(
        tap(() => {
          this.setValue(null);
          this.singleResult = null;
        }),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => {
          if (term.length < this.minimumChars) {
            return of([]);
          }
          return this.searchFn(term).pipe(
            take(1),
            tap((values: any[]) => {
              if (values.length === 1) {
                this.singleResult = values[0];
              }
            }),
            catchError(() => of([]))
          );
        }),
      );
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  writeValue(value: any): void {
    this.value = value;
    this.cdr.markForCheck();
  }

  onSelectItem(value: any): void {
    this.setValue(value);
    this.onTouchedFn();
    this.cdr.markForCheck();
  }

  setValue(value: any): void {
    this.value = value;
    this.onChangeFn(value);
  }

  onBlur(): void {
    if (this.singleResult) {
      this.setValue(this.singleResult);
    }
    this.onTouchedFn();
    this.cdr.markForCheck();
  }
}
