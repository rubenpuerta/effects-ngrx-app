import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "@models/user.model";
import { ActivatedRoute } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { GlobalState } from "@state/global.reducer";
import { userActions } from "@state/actions/user.actions";
import {
  getUserLoadingStatus,
  getUser,
  getUserLoadError
} from "@state/selectors/user.selectors";

@Component({
  selector: "app-user-container",
  templateUrl: "./user-container.component.html",
  styles: []
})
export class UserContainerComponent implements OnInit {
  user$: Observable<User>;
  loadingStatus$: Observable<string>;
  error$: Observable<any>;

  constructor(
    private router: ActivatedRoute,
    private store: Store<GlobalState>
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      const userId = params["id"];
      this.store.dispatch(userActions.loadUser({ userId }));
    });

    this.loadingStatus$ = this.store.pipe(select(getUserLoadingStatus));
    this.user$ = this.store.pipe(select(getUser));
    this.error$ = this.store.pipe(select(getUserLoadError));
  }
}
