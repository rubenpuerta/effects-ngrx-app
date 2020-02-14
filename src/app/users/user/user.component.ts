import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { User } from "@models/user.model";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styles: []
})
export class UserComponent implements OnChanges {
  @Input() user: User;
  @Input() loadingStatus: string;
  @Input() error: any;

  myUser: User = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.user) {
      this.myUser = changes.user.currentValue;
    }
  }
}
