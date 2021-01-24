import UserActionTypes from "./user.types";

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGNIN_SUCCESS,
  payload: user,
});

// return (dispatch) => {
//   dispatch({ type: UserActionTypes.SIGNIN_SUCCESS, payload: user }).then(
//     (response) => {
//       dispatch(push("/"));
//     }
//   );
// };

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGNIN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSucess = (user) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: user,
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const signOutStart = (token) => ({
  type: UserActionTypes.SIGN_OUT_START,
  payload: token,
});

export const signOutSucess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const getAvatarStart = (token) => ({
  type: UserActionTypes.GET_AVATAR_START,
  payload: token,
});

export const getAvatarSucess = (picture) => ({
  type: UserActionTypes.GET_AVATAR_SUCCESS,
  payload: picture,
});

export const getAvatarFailure = (error) => ({
  type: UserActionTypes.GET_AVATAR_FAILURE,
  payload: error,
});
export const updateUserStart = (userData) => ({
  type: UserActionTypes.UPDATE_USER_START,
  payload: userData,
});

export const updateUserSuccess = (userData) => ({
  type: UserActionTypes.UPDATE_USER_SUCCESS,
  payload: userData,
});

export const updateUserFailure = (error) => ({
  type: UserActionTypes.UPDATE_USER_FAILURE,
  payload: error,
});
