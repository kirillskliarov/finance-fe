import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dateinput',
  templateUrl: './dateinput.component.html',
  styleUrls: ['./dateinput.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DateinputComponent,
    multi: true,
  }],
})
export class DateinputComponent implements OnInit, ControlValueAccessor {
  onChangeFn: (value: any) => void;
  onTouchedFn: () => void;
  value: any | null;
  disabled: boolean;
  constructor() { }

  ngOnInit(): void {

  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  onInputChange(value: any): void {
    this.value = value;
    this.onChangeFn(value);
  }

  onBlur(): void {
    this.onTouchedFn();
  }
}
