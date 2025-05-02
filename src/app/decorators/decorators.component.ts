import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ChildDecoratorComponent } from './child-decorator/child-decorator.component';

@Component({
  selector: 'app-decorators',
  imports: [CommonModule, ChildDecoratorComponent],
  templateUrl: './decorators.component.html',
  styleUrl: './decorators.component.scss',
})
export class DecoratorsComponent implements AfterViewInit, OnInit {
  public array = [1, 2, 3, 4, 5];
  public isShow = true;

  @ViewChild('paragraph') paragraph!: ElementRef<HTMLParagraphElement>;
  @ViewChild('paragraphTemplate')
  paragraphTemplate!: TemplateRef<HTMLParagraphElement>;
  @ViewChild('component')
  childComponent!: ChildDecoratorComponent;

  @ViewChildren(ChildDecoratorComponent)
  childComponents!: QueryList<ChildDecoratorComponent>;

  ngOnInit(): void {}

  public ngAfterViewInit(): void {
    // console.log(this.paragraph.nativeElement.textContent);
    // console.log(this.paragraphTemplate);
    // console.log(this.childComponent);
    // console.log(this.childComponents);
  }
}
