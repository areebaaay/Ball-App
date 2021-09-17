import {
  BALL_CREATE_FAIL,
  BALL_CREATE_SUCCESS,
  BALL_LIST_SUCCESS,
  BALL_LIST_FAIL,
  BALL_LIST_REQUEST,
  BALL_BOOK_SUCCESS,
  BALL_ERROR,
  BALL_RETURN_SUCCESS,
} from '../constants/ballConstants';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const addBall = (name, inStock, image) => async (dispatch, getState) => {
  try {
    const {
      login: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      `${BASE_URL}/api/balls`,
      { name, image, inStock },
      config
    );
    console.log(`${BASE_URL}/api/balls`);

    dispatch({
      type: BALL_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BALL_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listBalls = () => async (dispatch) => {
  try {
    dispatch({ type: BALL_LIST_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/api/balls`);
    dispatch({
      type: BALL_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BALL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const bookBall = (ballId) => async (dispatch, getState) => {
  try {
    const {
      login: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const res = await axios.patch(
      `${BASE_URL}/api/balls/own/${ballId}`,
      {},
      config
    );

    dispatch({
      type: BALL_BOOK_SUCCESS,
      payload: { ballId, ownedBy: res.data },
    });

    setTimeout(() => {
      removeBall(ballId);
    }, 15 * 60 * 1000);
  } catch (error) {
    dispatch({
      type: BALL_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeBall = (id) => async (dispatch, getState) => {
  try {
    const {
      login: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const res = await axios.patch(
      `${BASE_URL}/api/balls/return/${id}`,
      {},
      config
    );

    dispatch({
      type: BALL_RETURN_SUCCESS,
      payload: { id, ownedBy: res.data },
    });
  } catch (error) {
    dispatch({
      type: BALL_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
