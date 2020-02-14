import { createReducer, Action, on } from "@ngrx/store";

import { User } from "@models/user.model";
import { userActions } from "@state/actions/user.actions";

export enum loadingUserStates {
  loading = "LOADING",
  loaded = "LOADED",
  idle = "IDLE"
}

export interface UserState {
  user: User;
  loadingState: loadingUserStates;
  error: any;
}

const initialUserState: UserState = {
  user: null,
  loadingState: loadingUserStates.idle,
  error: null
};

const userReducer = createReducer(
  initialUserState,
  on(userActions.loadUser, state => ({
    ...state,
    loadingState: loadingUserStates.loading,
    error: null
  })),
  on(userActions.loadUserSuccess, (state: UserState, { user }) => ({
    ...state,
    user,
    loadingState: loadingUserStates.loaded,
    error: null
  })),
  on(userActions.loadUserFail, (state, { error }) => {
    return {
      ...state,
      users: null,
      loadingState: loadingUserStates.idle,
      error: { status: error.status, message: error.message, url: error.url }
    };
  })
);

export const userStateReducer = (
  state: UserState | undefined,
  action: Action
): UserState => userReducer(state, action);
