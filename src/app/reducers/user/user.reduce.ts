import { User } from '../../models/user';
import { UserActionTypes, UserActions } from '../../actions/user/user.action';

export interface State {
  user: User;
  loggedIn: boolean;
  isLoading: boolean;
  errorMessage: string;
  hasError: boolean;
}

export const initialState: State = {
  user: new User('', '', '', ''),
  loggedIn: false,
  isLoading: true,
  errorMessage: '',
  hasError: false,
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return {
        ...state,
        hasError: false,
        errorMessage: 'ocurrio un error',
        isLoading: true,
      };
    case UserActionTypes.LOGIN_COMPLETE:
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
        isLoading: false,
      };
    case UserActionTypes.LOGIN_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        hasError: true,
        isLoading: false,
      };
    default:
      return state;
  }
}
export const getLoggedIn = (state: State) => state.loggedIn;
export const selectUser = (state: State) => state.user;
export const errorMessage = (state: State) => state.errorMessage;
export const hasError = (state: State) => state.hasError;
export const isLoading = (state: State) => state.isLoading;
