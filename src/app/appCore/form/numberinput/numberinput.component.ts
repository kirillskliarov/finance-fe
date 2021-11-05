import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit, Renderer2,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-numberinput',
  templateUrl: './numberinput.component.html',
  styleUrls: ['./numberinput.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumberinputComponent,
    multi: true,
  }],
})
export class NumberinputComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  typingPattern = /^-?(\d+[.,]?\d*)?$/;
  valuePattern = /^-?\d+([.,]\d+)?$/;
  @Input()
  appPlaceholder: string;
  @ViewChild('inputElement', { read: ElementRef })
  inputElement: ElementRef<HTMLInputElement>;
  onChangeFn: (value: number | null) => void;
  onTouchedFn: () => void;
  value: number | null;
  viewedValue: string = '';
  disabled: boolean;

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly renderer: Renderer2,
  ) { }

  ngAfterViewInit(): void {
    // this.renderer.listen(this.inputElement.nativeElement, 'keyup', (event: Event) => {
    //   console.log(event);
    //   this.onInputChange();
    // })
  }

  ngOnInit(): void {
  }

  registerOnChange(fn: (value: number | null) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: number | null): void {
    this.value = value;
    this.viewedValue = String(value ?? '');
  }

  onInputChange(inputValue: string): void {
    this.value = Number(inputValue.replace(',', '.'));
    this.onChangeFn(this.value);
  }

  onBlur(): void {
    this.onTouchedFn();
  }

}
