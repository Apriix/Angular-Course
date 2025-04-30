import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyNavigation } from './components/navigation/navigation.component';
import { MyCalculatorModule } from './my-calculator/my-calculator-module/my-calculator.module';
import { PipesComponent } from './pipes/components/pipes/pipes.component';
import { FormsComponent } from './forms/components/forms/forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MyCalculatorModule,
    MyNavigation,
    PipesComponent,
    FormsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
