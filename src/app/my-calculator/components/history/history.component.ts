import { Component, input } from '@angular/core';
import { AppModule } from '../../../app.module';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [AppModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent {
  //   @Input({ required: true }) history: string[] = [];

  readonly history = input.required<string[]>();
}
