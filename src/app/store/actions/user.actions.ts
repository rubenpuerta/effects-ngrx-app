import { createAction, props } from "@ngrx/store";
import { User } from "@models/user.model";

export const loadUser = createAction(
  "[User] Load user data",
  props<{ userId: string }>()
);
export const loadUserSuccess = createAction(
  "[User] Load user data success",
  props<{ user: User }>()
);
export const loadUserFail = createAction(
  "[User] Load users data failed",
  props<{ error: any }>()
);

export const userActions = {
  loadUser,
  loadUserFail,
  loadUserSuccess
};
