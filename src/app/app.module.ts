import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyEmptyPage } from './components/empty-route/empty-route.component';
import { MyNavigation } from './components/navigation/navigation.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, MyNavigation, MyEmptyPage],
  exports: [CommonModule, FormsModule],
})
export class AppModule {}
