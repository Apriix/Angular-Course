import { Routes } from '@angular/router';
import { MyEmptyPage } from './components/empty-route/empty-route.component';
import { MyCalculatorComponent } from './my-calculator/components/my-calculator.component';

export const routes: Routes = [
  {
    path: 'calculator',
    component: MyCalculatorComponent,
  },
  {
    path: 'object-list',
    loadChildren: () =>
      import('../object-list/object-list.module').then(
        (m) => m.ObjectListModule
      ),
  },
  {
    path: '**',
    component: MyEmptyPage,
  },
];
