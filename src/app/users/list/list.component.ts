import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user.model";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { UsersState } from "@reducers/users.reducers";
import {
  getUsers,
  getUsersLoadingStatus,
  getUsersLoadError
} from "@selectors/users.selectors";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styles: []
})
export class ListComponent implements OnInit {
  users$: Observable<User[]>;
  loadingStatus$: Observable<string>;
  error$: Observable<any>;

  constructor(private store: Store<UsersState>) {}

  ngOnInit() {
    this.loadingStatus$ = this.store.pipe(select(getUsersLoadingStatus));
    this.users$ = this.store.pipe(select(getUsers));
    this.error$ = this.store.pipe(select(getUsersLoadError));
  }
}
