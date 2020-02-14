import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getUserState = createFeatureSelector("userState");

export const getUser = createSelector(getUserState, ({ user }) => user);

export const getUserLoadingStatus = createSelector(
  getUserState,
  ({ loadingState }) => loadingState
);

export const getUserLoadError = createSelector(
  getUserState,
  ({ error }) => error
);
