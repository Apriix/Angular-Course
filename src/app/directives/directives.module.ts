import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyChangeColorDirective } from './directives/my-change-color-directive.directive';

@NgModule({
  declarations: [],
  imports: [CommonModule, MyChangeColorDirective],
  exports: [MyChangeColorDirective],
})
export class DirectivesModule {}
