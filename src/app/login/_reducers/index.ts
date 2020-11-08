import { createSelector } from '@ngrx/store';

import * as fromUser from './user.reducer';
export interface UserState {
  entitie: fromUser.UserState;
}
export const reducers = {
  entitie: fromUser.userReducer,
};
export const getAppLogin = (state: UserState) => state.entitie;
export const getLogin = createSelector(
  getAppLogin,
  (state: fromUser.UserState) => {
    return state.entities;
  }
);
