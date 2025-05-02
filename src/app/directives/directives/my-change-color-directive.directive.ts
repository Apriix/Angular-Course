import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  inject,
} from '@angular/core';

@Directive({
  selector: '[myChangeColor]',
  standalone: true,
})
export class MyChangeColorDirective {
  @Input('myChangeColor') colors: string[] = [
    'red',
    'blue',
    'green',
    'purple',
    'orange',
  ];
  private currentColorIndex = 0;
  private el = inject(ElementRef);

  @HostListener('mouseenter')
  onMouseEnter() {
    this.changeColor();
  }

  private changeColor() {
    this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
    this.el.nativeElement.style.color = this.colors[this.currentColorIndex];
  }
}
