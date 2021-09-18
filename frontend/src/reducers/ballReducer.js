import {
  BALL_BOOK_SUCCESS,
  BALL_CREATE_FAIL,
  BALL_CREATE_SUCCESS,
  BALL_ERROR,
  BALL_LIST_FAIL,
  BALL_LIST_REQUEST,
  BALL_LIST_SUCCESS,
  BALL_RETURN_SUCCESS,
} from '../constants/ballConstants';

export const addBallReducer = (state = {}, action) => {
  switch (action.type) {
    case BALL_CREATE_SUCCESS: {
      return {
        ...state,
        ball: action.payload,
      };
    }
    case BALL_CREATE_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const ballListReducer = (state = { balls: [] }, action) => {
  switch (action.type) {
    case BALL_LIST_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case BALL_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        balls: action.payload,
      };
    }
    case BALL_LIST_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export const ballBookReducer = (state = { ball: [] }, action) => {
  switch (action.type) {
    case BALL_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case BALL_BOOK_SUCCESS: {
      return {
        ...state,
        ball: action.payload,
      };
    }

    case BALL_RETURN_SUCCESS: {
      return {
        ...state,
        ball: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
