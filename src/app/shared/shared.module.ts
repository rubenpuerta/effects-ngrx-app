import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { ErrorComponent } from "./error/error.component";
import { LoadingComponent } from "./loading/loading.component";

@NgModule({
  declarations: [NavbarComponent, ErrorComponent, LoadingComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, ErrorComponent, LoadingComponent]
})
export class SharedModule {}
