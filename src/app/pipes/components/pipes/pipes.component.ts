import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PipePipe } from '../pipe/pipe.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, PipePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  public name = 'Pedro';
  public surname = 'PERez';

  public date = new Date().toDateString();
}
