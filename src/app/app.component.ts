import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyCalculatorComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
