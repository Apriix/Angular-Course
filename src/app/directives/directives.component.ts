import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyChangeColorDirective } from './directives/my-change-color-directive.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, MyChangeColorDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss',
})
export class DirectivesComponent {
  public colors: string[] = ['red', 'green', 'blue', 'yellow', 'purple'];

  public customColors: string[] = [
    '#FF5733',
    '#33FF57',
    '#3357FF',
    '#F033FF',
    '#FFB533',
  ];

  public isShow = true;

  public currentColor: string = this.colors[0];

  public elementStyle: any = {
    color: 'red',
    opacity: 0.5,
  };
}
