import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyNavigation } from './components/navigation/navigation.component';
import { MyCalculatorModule } from './my-calculator/my-calculator-module/my-calculator.module';
import { DirectivesComponent } from './directives/directives.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MyCalculatorModule,
    MyNavigation,
    DirectivesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
