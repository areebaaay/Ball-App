import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
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
    case USER_LOGOUT: {
      return {};
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

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST: {
      return { loading: true };
    }

    case USER_LIST_SUCCESS: {
      return {
        loading: false,
        users: action.payload,
      };
    }

    case USER_LIST_FAIL: {
      return {
        loading: false,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST: {
      return { loading: true };
    }

    case USER_UPDATE_PROFILE_SUCCESS: {
      return {
        loading: false,
        userInfo: action.payload,
        success: true,
      };
    }

    case USER_UPDATE_PROFILE_FAIL: {
      return {
        loading: false,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
