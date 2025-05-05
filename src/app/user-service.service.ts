import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public isUserLogged = new BehaviorSubject<boolean>(false);

  public Stringsubject$ = new BehaviorSubject<string>('default value');
  constructor() {}

  public login(): void {
    console.log(123);
    this.isUserLogged.next(true);
  }
}
