import { Routes } from '@angular/router';
import { AppChildComponent } from './app-child/app-child.component';
import { MyEmptyPage } from './components/empty-route/empty-route.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/components/forms/forms.component';
import { isLoggedGuardService } from './islogged.guard';
import { MyCalculatorComponent } from './my-calculator/components/my-calculator.component';
import { PostListComponent } from './request/components/post-list/post-list.component';
import { ViewFooComponent } from './view-styles/components/view-foo/view-foo.component';

export const routes: Routes = [
  {
    path: 'calculator',
    component: MyCalculatorComponent,
    canDeactivate: [(component: MyCalculatorComponent) => !component.canLeave],
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
    path: 'decorators',
    component: DecoratorsComponent,
  },
  {
    path: 'app-child',
    component: AppChildComponent,
  },
  {
    path: 'styles',
    component: ViewFooComponent,
  },

  {
    path: 'directives',
    component: DirectivesComponent,
    canActivate: [isLoggedGuardService],
    canMatch: [],
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
