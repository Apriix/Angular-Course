import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss',
})
export class DirectivesComponent {
  public colors: string[] = ['red', 'green', 'blue', 'yellow', 'purple'];

  public isShow = true;

  public currentColor: string = this.colors[0];

  public elementStyle: any = {
    color: 'red',
    opacity: 0.5,
  };
}
