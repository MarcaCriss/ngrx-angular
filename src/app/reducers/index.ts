import { createSelector } from "@ngrx/store";
import { State } from './user/user.reduce';

export const selectUserState = (state: State) => state.user;
export const selectCurrentUser = createSelector(
  selectUserState,
  fromUser.selectUser
);
export const getLoggedIn = createSelector(
  selectUserState,
  fromUser.getLoggedIn
);
export const userErrorMessage = createSelector(
  selectUserState,
  fromUser.errorMessage
);
export const userHasError = createSelector(
  selectUserState,
  fromUser.hasError
);
export const userIsLoading = createSelector(
  selectUserState,
  fromUser.isLoading
);