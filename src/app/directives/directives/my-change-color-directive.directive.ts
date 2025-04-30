import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[myChangeColor]',
})
export class MyChangeColorDirective implements AfterViewInit {
  @Input('myChangeColor') colors?: string[];

  private el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngAfterViewInit(): void {
    this.changeColor(this.el);
  }

  private changeColor(el: ElementRef) {
    if (this.colors && this.colors.length !== 0)
      setInterval(() => {
        el.nativeElement.style.color =
          this.colors![Math.floor(Math.random() * this.colors!.length)];
      }, 2000);
  }
}
