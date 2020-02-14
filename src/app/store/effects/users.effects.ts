import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { UserService } from "@services/user.service";
import { usersActions } from "@actions/users.actions";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class usersEffects {
  loadUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUsers),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map(users => usersActions.loadUsersSuccess({ users })),
          catchError(error => of(usersActions.loadUsersFail({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
