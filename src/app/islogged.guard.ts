import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserService } from './user-service.service';

@Injectable({
  providedIn: 'root',
})
export class isLoggedGuardService implements CanActivate {
  private readonly userService = inject(UserService);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.userService.isUserLogged.pipe(
      map((isLogged) => {
        if (isLogged) {
          return true;
        } else {
          console.log('asd');
          alert('You are not logged in!');
          return false;
        }
      })
    );
  }
}
