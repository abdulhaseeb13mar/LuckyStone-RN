import ActionTypes from './actionTypes';

export const setCurrentProductAction = (paintingInfo) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.SET_CURRENT_PRODUCT,
      payload: paintingInfo,
    });
  };
};

export const setUserInfoAction = (userInfo) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.SET_USER_INFO,
      payload: userInfo,
    });
  };
};

export const setFavAction = (favItem) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.SET_FAVOURITE,
      payload: favItem,
    });
  };
};

export const removeFavAction = (itemId) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.REMOVE_FAVOURITE,
      payload: itemId,
    });
  };
};
