export const reducer = (state, action) => {
  if (action.type === "LOGIN_START") {
    return { ...state, user: null, isFetching: true, error: false };
  }
  if (action.type === "LOGIN_SUCCESS") {
    return { ...state, user: action.payload, isFetching: false, error: false };
  }
  if (action.type === "LOGIN_FAILURE") {
    return { ...state, user: null, isFetching: false, error: true };
  }
  if (action.type === "LOGOUT") {
    return { ...state, user: null, isFetching: false, error: false };
  }

  if (action.type === "UPDATE_START") {
    return { ...state, isFetching: true };
  }
  if (action.type === "UPDATE_SUCCESS") {
    return { ...state, user: action.payload, isFetching: false, error: false };
  }
  if (action.type === "UPDATE_FAILURE") {
    return { ...state, user: state.user, isFetching: false, error: true };
  }
  return state;
};
