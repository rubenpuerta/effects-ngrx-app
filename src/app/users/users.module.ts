import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "../shared/shared.module";
import { UserContainerComponent } from "./user-container/user-container.component";

@NgModule({
  declarations: [ListComponent, UserComponent, UserContainerComponent],
  imports: [CommonModule, SharedModule],
  exports: [ListComponent, UserComponent, UserContainerComponent]
})
export class UsersModule {}
