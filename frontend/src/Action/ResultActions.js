import {
  UPDATE_RESULT_SUCCESS,
  UPDATE_RESULT_FAILED,
  ADD_RESULT_SUCCESS,
  ADD_RESULT_FAILED,
} from './types';

export const addResult = ({ data }) => async (dispatch) => {
  try {
    const res = ''; //api call
    dispatch({
      type: ADD_RESULT_SUCCESS,
      payload: res?.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_RESULT_FAILED,
      payload: {
        msg: error?.response?.statusText,
        status: error?.response?.status,
      },
    });
  }
};

export const updateResults = ({ id, data }) => async (dispatch) => {
  try {
    const res = ''; //api call

    dispatch({
      type: UPDATE_RESULT_SUCCESS,
      payload: res?.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_RESULT_FAILED,
      payload: {
        msg: error?.response?.statusText,
        status: error?.response?.status,
      },
    });
  }
};
