import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { UserService } from "@services/user.service";
import { map, switchMap, catchError, tap } from "rxjs/operators";
import { of } from "rxjs";
import { userActions } from "@state/actions/user.actions";

@Injectable()
export class userEffects {
  loadUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUser),
      switchMap(({ userId }) =>
        this.userService.getUserById(userId).pipe(
          map(user => userActions.loadUserSuccess({ user })),
          catchError(error => of(userActions.loadUserFail({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
