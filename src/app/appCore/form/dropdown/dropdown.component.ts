import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
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
  label: string = 'Select item';
  @Input()
  allowEmpty: boolean = true;

  onChangeFn: (value: any) => void;
  onTouchedFn: () => void;
  value: any | null;
  disabled: boolean;

  constructor(
    private readonly cdr: ChangeDetectorRef,
  ) { }

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
    this.cdr.markForCheck();
  }

  writeValue(value: any): void {
    this.value = value;
    this.cdr.markForCheck();
  }

  onSelect(value: any): void {
    this.value = value;
    this.onChangeFn(value);
  }

  onOpenChanged(isOpened: boolean): void {
    if (!isOpened) {
      this.onTouchedFn();
      this.cdr.markForCheck();
    }
  }
}
