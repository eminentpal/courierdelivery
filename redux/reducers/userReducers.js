import * as constants from "../constants/userConstants";

export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case constants.REGISTER_USER_REQUEST:
    case constants.LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case constants.REGISTER_USER_SUCCESS:
    case constants.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case constants.LOGOUT_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
      };

    case constants.LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case constants.LOGOUT_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    // case LOGIN_FAIL:
    case constants.REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case constants.CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }

    default:
      return state;
  }
};
