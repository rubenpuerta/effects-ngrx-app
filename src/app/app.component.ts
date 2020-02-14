import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { usersActions } from "@actions/users.actions";
import { GlobalState } from "@state/global.reducer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private store: Store<GlobalState>) {
    this.store.dispatch(usersActions.loadUsers());
  }
}
