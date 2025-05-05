import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserService } from '../../../user-service.service';
import { TodoItemI } from '../view-foo/view-foo.component';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent implements OnInit {
  private userService = inject(UserService);
  @Input({ required: true }) todoItem!: TodoItemI;

  public subject$: Observable<string> = new Subject<string>();

  ngOnInit(): void {
    this.subject$ = this.userService.Stringsubject$;
  }

  public returnBool(): boolean {
    console.log('commponentRenderring');
    return true;
  }

  public changeInsideText(): void {
    this.todoItem.text = 'changed from inside';
  }
}
