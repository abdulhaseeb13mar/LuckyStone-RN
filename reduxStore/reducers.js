import {combineReducers} from 'redux';
import ActionTypes from './actionTypes';

let currentProduct = {};

let UserInfo = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  address: '',
};

let FavItems = [];

const currentProductReducer = (state = currentProduct, action) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_PRODUCT:
      state = Object.assign({}, state, {...action.payload});
      return state;

    default:
      break;
  }
  return state;
};

const UserInfoReducer = (state = UserInfo, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER_INFO:
      state = Object.assign({}, state, {...action.payload});
      return state;

    default:
      break;
  }
  return state;
};

const favouritesReducer = (state = FavItems, action) => {
  switch (action.type) {
    case ActionTypes.SET_FAVOURITE:
      let isUnique = true;
      let arr = [...state];
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          isUnique = false;
          break;
        }
      }
      isUnique && arr.push({...action.payload});
      return arr;

    case ActionTypes.REMOVE_FAVOURITE:
      arr = state.filter((item) => item.id !== action.payload);
      return arr;

    default:
      break;
  }
  return state;
};

export default combineReducers({
  currentProductReducer,
  UserInfoReducer,
  favouritesReducer,
});
