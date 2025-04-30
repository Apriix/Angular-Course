import { Routes } from '@angular/router';
import { MyEmptyPage } from './components/empty-route/empty-route.component';
import { FormsComponent } from './forms/components/forms/forms.component';
import { MyCalculatorComponent } from './my-calculator/components/my-calculator.component';
import { PostListComponent } from './request/components/post-list/post-list.component';

export const routes: Routes = [
  {
    path: 'calculator',
    component: MyCalculatorComponent,
  },
  {
    path: 'posts',
    component: PostListComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: 'object-list',
    loadChildren: () =>
      import('../app/object-list/object-list.module').then(
        (m) => m.ObjectListModule
      ),
  },
  {
    path: '**',
    component: MyEmptyPage,
  },
];
