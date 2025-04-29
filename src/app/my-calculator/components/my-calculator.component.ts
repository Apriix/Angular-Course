import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from './history/history.component';

interface CalcGroup {
  first: CalcVar;
  second: CalcVar;
  operation: CalcOperations;
}

interface CalcVar {
  value: number;
  modificator: CalcModifiers;
}
enum CalcOperations {
  plus = '+',
  minus = '-',
  multiply = '*',
  divide = '/',
}

enum CalcModifiers {
  none = 'none',
  square = 'x²',
  cube = 'x³',
  sin = '(sin(x))',
  cosine = '(cos(x))',
}

@Component({
  selector: 'app-my-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule, HistoryComponent],
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss',
})
export class MyCalculatorComponent {
  public calcOperations = CalcOperations;
  public calcModifiers = CalcModifiers;
  public calcGroups: CalcGroup[] = [
    {
      first: {
        value: 5,
        modificator: CalcModifiers.none,
      },
      second: {
        value: 5,
        modificator: CalcModifiers.none,
      },
      operation: CalcOperations.plus,
    },
  ];
  public history: string[] = [];
  public operationsBetweenGroups: CalcOperations[] = [];
  public result?: number;

  public addGroup(): void {
    this.calcGroups.push({
      first: {
        value: 0,
        modificator: CalcModifiers.none,
      },
      second: {
        value: 0,
        modificator: CalcModifiers.none,
      },
      operation: CalcOperations.plus,
    });

    this.operationsBetweenGroups.push(CalcOperations.plus);
  }

  public removeGroup(index: number): void {
    this.calcGroups.splice(index, 1);
  }

  public calcGroup() {
    let result = 0;

    let tempHistory: string[] = [];

    this.calcGroups.forEach((group, index) => {
      if (index === 0) {
        result = this.calc(
          this.calcValueWIthModificator(group.first),
          this.calcValueWIthModificator(group.second),
          group.operation
        );
      } else {
        let tempResult = this.calc(
          this.calcValueWIthModificator(group.first),
          this.calcValueWIthModificator(group.second),
          group.operation
        );
        result = this.calc(
          result,
          tempResult,
          this.operationsBetweenGroups[index - 1]
        );
      }
      tempHistory.push(
        `
		(${
      group.first.modificator !== CalcModifiers.none
        ? group.first.modificator
        : ''
    } ${group.first.value}
		${group.operation}
		${
      group.second.modificator !== CalcModifiers.none
        ? group.second.modificator
        : ''
    } ${group.second.value})`
      );
    });

    tempHistory.push(`= ${result}`);
    this.history.push(tempHistory.join(' '));
    this.result = result;
  }

  public calcValueWIthModificator(value: CalcVar): number {
    switch (value.modificator) {
      case CalcModifiers.none:
        return value.value;
      case CalcModifiers.cosine:
        return Math.cos(value.value);
      case CalcModifiers.sin:
        return Math.sin(value.value);
      case CalcModifiers.square:
        return Math.pow(value.value, 2);
      case CalcModifiers.cube:
        return Math.pow(value.value, 3);
    }
  }

  public calc(
    first: number,
    second: number,
    operation: CalcOperations
  ): number {
    switch (operation) {
      case CalcOperations.plus:
        return first + second;
      case CalcOperations.minus:
        return first - second;
      case CalcOperations.multiply:
        return first * second;
      case CalcOperations.divide:
        return first / second;
      default:
        return first + second;
    }
  }
  public removeHistory() {
    this.history.pop();
  }
}
