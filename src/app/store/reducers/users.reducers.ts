import { createReducer, Action, on } from "@ngrx/store";
import { usersActions } from "@actions/users.actions";
import { User } from "@models/user.model";

export enum loadingStates {
  loading = "LOADING",
  loaded = "LOADED",
  idle = "IDLE"
}

export interface UsersState {
  users: User[];
  loadingState: loadingStates;
  error: any;
}

const initialUsersState: UsersState = {
  users: [],
  loadingState: loadingStates.idle,
  error: null
};

const usersReducer = createReducer(
  initialUsersState,
  on(usersActions.loadUsers, state => ({
    ...state,
    loadingState: loadingStates.loading,
    error: null
  })),
  on(usersActions.loadUsersSuccess, (state: UsersState, { users }) => ({
    ...state,
    users,
    loadingState: loadingStates.loaded,
    error: null
  })),
  on(usersActions.loadUsersFail, (state, { error }) => {
    return {
      ...state,
      users: null,
      loadingState: loadingStates.idle,
      error: { status: error.status, message: error.message, url: error.url }
    };
  })
);

export const usersStateReducer = (
  state: UsersState | undefined,
  action: Action
): UsersState => usersReducer(state, action);
