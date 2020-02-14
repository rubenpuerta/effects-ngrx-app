import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./users/list/list.component";
import { UserComponent } from "./users/user/user.component";
import { UserContainerComponent } from "./users/user-container/user-container.component";

const routes: Routes = [
  { path: "home", component: ListComponent },
  { path: "user/:id", component: UserContainerComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
