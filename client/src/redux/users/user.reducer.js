import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
  avatar: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGNIN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.UPDATE_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.SIGNIN_SUCCESS:
    case UserActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.GET_AVATAR_SUCCESS:
      return {
        ...state,
        avatar: action.payload,
      };
    case UserActionTypes.GET_AVATAR_FAILURE:
      return {
        ...state,
        avatar: "not found",
      };
    default:
      return state;
  }
};

export default userReducer;
