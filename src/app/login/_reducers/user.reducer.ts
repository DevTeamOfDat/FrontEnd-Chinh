import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as userLogin from '../_action/userAction';
import { User } from '../_models/user';

export interface UserState {
  entities: Array<User>;
}
const initialState: UserState = {
  entities: [],
};
export function userReducer(
  state = initialState,
  action: userLogin.Actions
): UserState {
  switch (action.type) {
    case userLogin.ActionTypes.CHECK_LOGIN: {
      const user: User = action.payload;
      return {
        entities: [...state.entities, user],
      };
    }
    case userLogin.ActionTypes.LOGOUT: {
      return {
        ...state,
        entities: [],
      };
    }
    default: {
      return state;
    }
  }
}
