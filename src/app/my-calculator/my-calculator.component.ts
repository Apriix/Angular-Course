import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss',
})
export class MyCalculatorComponent {
  [x: string]: any;
  public first: number = 1;
  public second: number = 1;
  public operation: string = '+';
  public history: string[] = [];
  public operations: string[] = ['+', '-', '*', '/'];
  public operationsX: string[] = ['x²', 'x³', '(sin(x))', '(cos(x))'];
  public operator: string = 'x²';
  public result: number | undefined = undefined;
  public variable: any;
  public variables: { value: number }[] = [];
  public remove: { value: number }[] = [];

  public calc() {
    switch (this.operation) {
      case '+':
        this.result = this.first + this.second;
        break;
      case '-':
        this.result = this.first - this.second;
        break;
      case '*':
        this.result = this.first * this.second;
        break;
      case '/':
        this.result = this.first / this.second;
        break;
    }

    this.history.unshift(
      `${this.first} ${this.operation} ${this.second} = ${this.result}`
    );
  }

  public calculate() {
    switch (this.operator) {
      case 'x²':
        this.result = Math.pow(this.variable, 2);
        break;
      case 'x³':
        this.result = Math.pow(this.variable, 3);
        break;
      case '(sin(x))':
        this.result = Math.sin(this.variable);
        break;
      case '(cos(x))':
        this.result = Math.cos(this.variable);
        break;
    }

    this.history.unshift(`${this.operator}(${this.variable}) = ${this.result}`);
  }
  public addVariable() {
    this.variables.push({ value: 0 });
  }

  public removeVariable() {
    this.variables.pop();
  }
}
