import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from '../components/history/history.component';
import { MyCalculatorComponent } from '../components/my-calculator.component';

@NgModule({
  declarations: [],
  exports: [MyCalculatorComponent, HistoryComponent],
  imports: [CommonModule, MyCalculatorComponent, HistoryComponent, FormsModule],
  providers: [],
})
export class MyCalculatorModule {}
