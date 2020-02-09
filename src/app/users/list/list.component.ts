import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styles: []
})
export class ListComponent implements OnInit, OnDestroy {
  public users: User[] = [];
  private subs: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subs = this.userService
      .getUsers()
      .subscribe(users => (this.users = users));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
