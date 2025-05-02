import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-child-decorator',
  templateUrl: './child-decorator.component.html',
  styleUrl: './child-decorator.component.scss',
})
export class ChildDecoratorComponent implements AfterContentInit {
  @ContentChild('paragraph') paragraph!: ElementRef<HTMLParagraphElement>;

  public ngAfterContentInit(): void {
    this.paragraph && console.log(this.paragraph);
  }
}
