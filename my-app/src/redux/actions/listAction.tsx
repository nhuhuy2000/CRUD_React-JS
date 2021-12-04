import { error } from 'console';
import { ActionTypes, UserActionsTypes, User } from '../contant/types';

//Add
export const addUsers = (user: User): UserActionsTypes => ({
  type: ActionTypes.ADD_USER,
  payload: {
    user: user,
  },
});
export const addUserSuccess = (user: User): UserActionsTypes => ({
  type: ActionTypes.SUCCESS_ADD_USER,
  payload: {
    user,
  },
});
export const addUserFail = (error: string): UserActionsTypes => ({
  type: ActionTypes.FAIL_ADD_USER,
  payload: {
    error,
  },
});
//View
export const viewUser = (id: number): UserActionsTypes => ({
  type: ActionTypes.VIEW_USER,
  payload: {
    id,
  },
});
export const viewUserSuccess = (user: User[]): UserActionsTypes => ({
  type: ActionTypes.SUCCESS_VIEW_USER,
  payload: {
    user,
  },
});
export const viewUserFail = (error: string): UserActionsTypes => ({
  type: ActionTypes.FAIL_VIEW_USER,
  payload: {
    error,
  },
});
//Update
export const updateUser = (user: User): UserActionsTypes => ({
  type: ActionTypes.UPDATE_USER,
  payload: {
    user,
  },
});
export const updateUserSuccess = (user: User): UserActionsTypes => ({
  type: ActionTypes.SUCCESS_UPDATE_USER,
  payload: {
    user,
  },
});
export const updateUserFail = (error: string): UserActionsTypes => ({
  type: ActionTypes.FAIL_UPDATE_USER,
  payload: {
    error,
  },
});

//Delete
export const deleteUser = (id: number): UserActionsTypes => ({
  type: ActionTypes.DELETE_USER,
  payload: {
    id,
  },
});
export const deleteUserSuccess = (id: number): UserActionsTypes => ({
  type: ActionTypes.SUCCESS_DELETE_USER,
  payload: {
    id,
  },
});
export const deleteUserFail = (error: string): UserActionsTypes => ({
  type: ActionTypes.FAIL_DELETE_USER,
  payload: {
    error,
  },
});

//List
export const listUser = (): UserActionsTypes => ({
  type: ActionTypes.LIST_USER,
});
export const listUserSuccess = (userList: User[]): UserActionsTypes => ({
  type: ActionTypes.SUCCESS_LIST_USER,
  payload: {
    userList,
  },
});
export const listUserFail = (error: string): UserActionsTypes => ({
  type: ActionTypes.FAIL_LIST_USER,
  payload: {
    error,
  },
});
