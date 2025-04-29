import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyObjectItemComponent } from './components/object-item/object-item.component';
import { MyObjectListComponent } from './components/object-list/object-list.component';
import { MyObjectListRouting } from './object-list-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyObjectListComponent,
    MyObjectItemComponent,
    MyObjectListRouting,
  ],
  exports: [MyObjectListComponent, MyObjectItemComponent],
})
export class ObjectListModule {}
