import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  effect,
  inject,
  signal,
} from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../../../user-service.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { ViewBarComponent } from '../view-bar/view-bar.component';
export interface TodoItemI {
  text: string;
}

const fadeInOut = trigger('fadeInOut', [
  state('open', style({ opacity: 1 })),
  state('close', style({ opacity: 0 })),
  transition('open => close', [animate('1s ease-out')]),
  transition('close => open', [animate('1s ease-in')]),
]);

@Component({
  selector: 'app-view-foo',
  standalone: true,
  imports: [CommonModule, ViewBarComponent, TodoItemComponent],
  templateUrl: './view-foo.component.html',
  styleUrls: ['./view-foo.component.scss'], // corrected 'styleUrl' to 'styleUrls'
  animations: [fadeInOut],
})
export class ViewFooComponent implements OnInit {
  private router = inject(Router);
  public isShow = false;
  private userService = inject(UserService);
  private ref = inject(ChangeDetectorRef);
  public todoArr: TodoItemI[] = [
    {
      text: 'Todo 1',
    },
    {
      text: 'Todo 2',
    },
    {
      text: 'Todo 3',
    },
  ];

  public login(): void {
    this.userService.login();
    this.ref.detectChanges();
  }

  public changeText(): void {
    this.todoArr[0] = { ...this.todoArr[0], text: 'Todo 1 changed' };
  }
  public changeStream(): void {
    this.userService.Stringsubject$.next('TWO');
  }

  public onAnimationStart(event: any) {
    console.log('Start', event);
  }
  public onAnimationDone(event: any) {
    console.log('Done', event);
  }

  count = signal(0);

  increment() {
    this.count.update((value) => value + 1);
  }

  double() {
    this.count.update((value) => value * this.count());
  }

  delete() {
    this.count.update(() => 0);
  }

  private effect = effect(() => {
    this.goToCalculator(this.count());
  });

  goToCalculator(count: number) {
    if (count > 50) {
      this.router.navigate(['/calculator']);
    }
  }

  ngOnInit() {
    this.goToCalculator(this.count());
  }
}
