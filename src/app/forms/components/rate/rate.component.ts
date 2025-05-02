import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface RateOptions {
  rates: number;
  text?: string;
}

@Component({
  selector: 'app-rate',
  imports: [CommonModule],
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RateComponent,
    },
  ],
})
export class RateComponent implements ControlValueAccessor, OnInit {
  @Input() options!: RateOptions;

  public currentRate!: number;

  public ratesArray: number[] = [];
  public disabled: boolean = false;

  public touched: boolean = false;

  onChange = (currentRate: number) => {};

  onTouched = () => {};

  ngOnInit(): void {
    this.fillRatesArray();
  }

  public onRate(index: number) {
    this.markAsTouched();

    if (!this.disabled) {
      this.currentRate = index;
      this.onChange(this.currentRate);
    }
  }

  // ControlValueAccessor methods start
  public writeValue(rate: number): void {
    this.currentRate = rate;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  // ControlValueAccessor methods end

  private fillRatesArray(): void {
    let cond = true;
    let count = 1;
    while (cond) {
      this.ratesArray.push(count);
      if (count === this.options.rates) {
        cond = false;
      } else {
        count++;
      }
    }
  }
}
