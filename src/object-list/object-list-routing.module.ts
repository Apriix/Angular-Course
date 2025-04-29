import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyObjectItemComponent } from './components/object-item/object-item.component';
import { MyObjectListComponent } from './components/object-list/object-list.component';

export const routes: Routes = [
  {
    path: '',
    component: MyObjectListComponent,
  },
  { path: ':id', component: MyObjectItemComponent },
];

@NgModule({
  imports: [
    MyObjectListComponent,
    MyObjectItemComponent,
    RouterModule.forChild(routes),
  ],
  exports: [MyObjectListComponent, MyObjectItemComponent, RouterModule],
  providers: [],
  declarations: [],
  bootstrap: [],
})
export class MyObjectListRouting {}
