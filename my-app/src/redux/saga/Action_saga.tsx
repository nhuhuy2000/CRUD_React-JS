import * as Effects from 'redux-saga/effects';
import {
  ActionTypes,
  UserActionsTypes,
  User,
  DeleteUserAction,
  UpdateUserAction,
} from '../contant/types';
import { getUserList, addUser, deleteUserAPI, viewUser, updateUserAPI } from './../api/api';
import {
  addUsers,
  addUserSuccess,
  addUserFail,
  updateUser,
  updateUserSuccess,
  updateUserFail,
  deleteUser,
  deleteUserSuccess,
  deleteUserFail,
  listUser,
  listUserSuccess,
  listUserFail,
} from '../actions/listAction';

import { AddUserAction, ViewUserAction } from './../contant/types';
import { viewUserSuccess, viewUserFail } from './../actions/listAction';

const call: any = Effects.call;
//Start List
function* getUserSaga(): any {
  try {
    const userList: User[] = yield call(getUserList);

    yield Effects.put(listUserSuccess(userList));
  } catch (error: any) {
    yield Effects.put(listUserFail(error));
  }
}
function* getUserMatcher() {
  yield Effects.takeLeading(ActionTypes.LIST_USER, getUserSaga);
}
//End List

//Start Add User
function* addUserSaga(action: AddUserAction): any {
  try {
    const data: User = yield call(addUser, action.payload.user);
    console.log(data);
    yield Effects.put(addUserSuccess(data));
  } catch (error: any) {
    yield Effects.put(addUserFail(error.message));
  }
}
function* addUserMatcher() {
  yield Effects.takeEvery(ActionTypes.ADD_USER, addUserSaga);
}
//Start View
function* viewUserSaga(action: ViewUserAction): any {
  try {
    const userList: User[] = yield call(viewUser, action.payload.id);
    yield Effects.put(viewUserSuccess(userList));
  } catch (error: any) {
    yield Effects.put(viewUserFail(error.message));
  }
}
function* viewUserMatcher() {
  yield Effects.takeEvery(ActionTypes.VIEW_USER, viewUserSaga);
}
//End View
//Start Delete User
function* deleteUserSaga(action: DeleteUserAction): any {
  try {
    yield call(deleteUserAPI, action.payload.id);

    yield Effects.put(deleteUserSuccess(action.payload.id));
  } catch (e: any) {
    console.log(e);
    yield Effects.put(deleteUserFail(e.message));
  }
}
function* deleteUserMatcher() {
  yield Effects.takeEvery(ActionTypes.DELETE_USER, deleteUserSaga);
}

//Start Update User
function* updateUserSaga(action: AddUserAction): any {
  try {
    const data: User = yield call(updateUserAPI, action.payload.user.id, action.payload.user);

    yield Effects.put(updateUserSuccess(data));
  } catch (error: any) {
    yield Effects.put(updateUserFail(error.message));
  }
}
function* updateUserMatcher() {
  yield Effects.takeEvery(ActionTypes.UPDATE_USER, updateUserSaga);
}
export default function* usersSaga() {
  yield Effects.all([
    getUserMatcher(),
    addUserMatcher(),
    deleteUserMatcher(),
    viewUserMatcher(),
    updateUserMatcher(),
  ]);
}
