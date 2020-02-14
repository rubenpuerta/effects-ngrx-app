import { createAction, props } from "@ngrx/store";
import { User } from "@models/user.model";

export const loadUsers = createAction("[Users] Load users data");
export const loadUsersSuccess = createAction(
  "[Users] Load users data success",
  props<{ users: User[] }>()
);
export const loadUsersFail = createAction(
  "[Users] Load users data failed",
  props<{ error: any }>()
);

export const usersActions = {
  loadUsers,
  loadUsersFail,
  loadUsersSuccess
};
