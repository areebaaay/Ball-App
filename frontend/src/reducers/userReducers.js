import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants';

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      return {
        userInfo: action.payload,
      };
    }
    case USER_LOGIN_FAIL: {
      return {
        userInfo: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_SUCCESS: {
      return {
        userInfo: action.payload,
      };
    }
    case USER_REGISTER_FAIL: {
      return {
        error: {
          error: action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};
