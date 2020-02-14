import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { UsersModule } from "./users/users.module";
import { EffectsModule } from "@ngrx/effects";
import { globalStateReducers } from "@state/global.reducer";
import { globalStateEffects } from "@state/effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    EffectsModule.forRoot(globalStateEffects),
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(globalStateReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
