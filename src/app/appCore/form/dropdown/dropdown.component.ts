import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DropdownComponent,
    multi: true,
  }],
})
export class DropdownComponent implements OnInit, ControlValueAccessor {
  @Input()
  items: any[] | null;
  @Input()
  label: string = 'Select label';
  @Input()
  allowEmpty: boolean = true;

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

  onSelect(value: any): void {
    this.value = value;
    this.onChangeFn(value);
    this.onTouchedFn();
  }

  onTouch(): void {
    this.onTouchedFn();
  }
}
