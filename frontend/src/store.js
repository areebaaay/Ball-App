import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  registerReducer,
  loginReducer,
  userListReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers';
import {
  addBallReducer,
  ballListReducer,
  ballBookReducer,
} from './reducers/ballReducer';

const reducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  addBall: addBallReducer,
  ballList: ballListReducer,
  ballBook: ballBookReducer,
  userList: userListReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  login: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
