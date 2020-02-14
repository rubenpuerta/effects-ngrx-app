import { ActionReducerMap } from "@ngrx/store";
import { UsersState, usersStateReducer } from "./reducers/users.reducers";
import { UserState, userStateReducer } from "./reducers/user.reducers";

export interface GlobalState {
  usersState: UsersState;
  userState: UserState;
}

export const globalStateReducers: ActionReducerMap<GlobalState> = {
  usersState: usersStateReducer,
  userState: userStateReducer
};
