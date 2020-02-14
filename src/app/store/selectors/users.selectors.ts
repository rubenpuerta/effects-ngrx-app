import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getUsersState = createFeatureSelector("usersState");

export const getUsers = createSelector(getUsersState, ({ users }) => users);

export const getUsersLoadingStatus = createSelector(
  getUsersState,
  ({ loadingState }) => loadingState
);

export const getUsersLoadError = createSelector(
  getUsersState,
  ({ error }) => error
);
