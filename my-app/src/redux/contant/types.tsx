import { AxiosResponse } from 'axios';

export enum ActionTypes {
  ADD_USER = 'ADD_USER',
  SUCCESS_ADD_USER = 'SUCCESS_ADD_USER',
  FAIL_ADD_USER = 'FAIL_ADD_USER',

  UPDATE_USER = 'UPDATE_USER',
  SUCCESS_UPDATE_USER = 'SUCCESS_UPDATE_USER',
  FAIL_UPDATE_USER = 'FAIL_UPDATE_USER',

  DELETE_USER = 'DELETE_USER',
  SUCCESS_DELETE_USER = 'SUCCESS_DELETE_USER',
  FAIL_DELETE_USER = 'FAIL_DELETE_USER',

  LIST_USER = 'LIST_USER',
  SUCCESS_LIST_USER = 'SUCCESS_LIST_USER',
  FAIL_LIST_USER = 'FAIL_LIST_USER',

  VIEW_USER = 'VIEW_USER',
  SUCCESS_VIEW_USER = 'SUCCESS_VIEW_USER',
  FAIL_VIEW_USER = 'FAIL_VIEW_USER',
}

export interface User {
  id?: number;
  name: string;
  dob: string;
  age: string;
}
//START VIEW USER
export interface ViewUserAction {
  type: ActionTypes.VIEW_USER;
  payload: {
    id: number;
  };
}
export interface SuccessViewUserAction {
  type: ActionTypes.SUCCESS_VIEW_USER;
  payload: {
    user: User[];
  };
}
export interface FailViewUserAction {
  type: ActionTypes.FAIL_VIEW_USER;
  payload: {
    error: string;
  };
}
//END VIEW USER
//START ADD
export interface AddUserAction {
  type: ActionTypes.ADD_USER;
  payload: {
    user: User;
  };
}
export interface SuccessAddUserAction {
  type: ActionTypes.SUCCESS_ADD_USER;
  payload: {
    user: User;
  };
}
export interface FailAddUserAction {
  type: ActionTypes.FAIL_ADD_USER;
  payload: {
    error: string;
  };
}

export interface DeleteUserAction {
  type: ActionTypes.DELETE_USER;
  payload: {
    id: number;
  };
}
interface SuccessDeleteUserAction {
  type: ActionTypes.SUCCESS_DELETE_USER;
  payload: {
    id: number;
  };
}
interface FailDeleteUserAction {
  type: ActionTypes.FAIL_DELETE_USER;
  payload: {
    error: string;
  };
}

export interface UpdateUserAction {
  type: ActionTypes.UPDATE_USER;
  payload: {
    user: User;
  };
}
interface SuccessUpdateUserAction {
  type: ActionTypes.SUCCESS_UPDATE_USER;
  payload: {
    user: User;
  };
}
interface FailUpdateUserAction {
  type: ActionTypes.FAIL_UPDATE_USER;
  payload: {
    error: string;
  };
}

interface ListUserAction {
  type: ActionTypes.LIST_USER;
}
interface SuccessListUserAction {
  type: ActionTypes.SUCCESS_LIST_USER;
  payload: {
    userList: User[];
  };
}
interface FailListUserAction {
  type: ActionTypes.FAIL_LIST_USER;
  payload: {
    error: string;
  };
}

export interface UserState {
  userList: User[];
  loading: boolean;
  error: boolean;
}
export type UserActionsTypes =
  | AddUserAction
  | SuccessAddUserAction
  | FailAddUserAction
  | DeleteUserAction
  | SuccessDeleteUserAction
  | FailDeleteUserAction
  | UpdateUserAction
  | SuccessUpdateUserAction
  | FailUpdateUserAction
  | ListUserAction
  | SuccessListUserAction
  | FailListUserAction
  | ViewUserAction
  | SuccessViewUserAction
  | FailViewUserAction;
