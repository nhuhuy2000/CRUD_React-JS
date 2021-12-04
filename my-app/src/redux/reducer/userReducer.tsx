import { ActionTypes, UserActionsTypes, UserState, User } from '../contant/types';

const initialState: UserState = {
  userList: [],
  // isUserListFetched: false,
  loading: false,
  error: false,
};
export function userReducer(state: UserState = initialState, action: UserActionsTypes): UserState {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return { ...state, loading: true };
    case ActionTypes.SUCCESS_ADD_USER:
      return {
        ...state,
        userList: [...state.userList, action.payload.user],
        loading: false,
      };
    case ActionTypes.FAIL_ADD_USER:
      return { ...state, loading: false, error: true };

    case ActionTypes.DELETE_USER:
      return { ...state, loading: true };
    case ActionTypes.SUCCESS_DELETE_USER:
      let newState = [...state.userList];
      newState = newState.filter((user) => user.id !== action.payload.id);
      return { ...state, userList: [...newState], loading: false };
    case ActionTypes.FAIL_DELETE_USER:
      return { ...state, loading: false, error: true };

    case ActionTypes.LIST_USER:
      return { ...state, loading: true, error: false };
    case ActionTypes.SUCCESS_LIST_USER:
      return { ...state, userList: action.payload.userList, loading: false };
    case ActionTypes.FAIL_LIST_USER:
      return { ...state, loading: false, error: true };

    case ActionTypes.VIEW_USER:
      return { ...state, loading: true, error: false };
    case ActionTypes.SUCCESS_VIEW_USER:
      return { ...state, userList: action.payload.user, loading: false };
    case ActionTypes.FAIL_VIEW_USER:
      return { ...state, loading: false, error: true };

    case ActionTypes.UPDATE_USER:
      return { ...state, loading: true };
    case ActionTypes.SUCCESS_UPDATE_USER:
      const index = state.userList.findIndex((user) => user.id === action.payload.user.id);
      const newUserList = [...state.userList];
      newUserList.splice(index, 1, action.payload.user);

      return {
        ...state,
        userList: newUserList,
        loading: false,
      };
    // return {
    //   ...state,
    //   userList: [...state.userList, action.payload.user],
    //   loading: false,
    // return state;
    // };
    case ActionTypes.FAIL_UPDATE_USER:
      return { ...state, loading: false, error: true };

    default:
      return { ...state };
  }
}
