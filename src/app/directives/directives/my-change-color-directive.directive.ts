import {
  AfterViewInit,
  Directive,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[myChangeColor]',
  standalone: true,
})
export class MyChangeColorDirective implements AfterViewInit {
  @HostBinding('style.color') color: string = 'red';
  @HostBinding('class.my-class') class: boolean = true;
  @HostBinding('style.background') background: string = 'transparent';

  @HostListener('mouseenter') handleEnter(): void {
    this.background = this.getCHangeColor();
  }

  @HostListener('mouseleave') handleLeave(): void {
    this.background = 'transparent';
  }

  constructor() {}

  ngAfterViewInit(): void {
    setInterval(() => {
      this.color = this.getCHangeColor();
    }, 2000);
  }
  private getCHangeColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
