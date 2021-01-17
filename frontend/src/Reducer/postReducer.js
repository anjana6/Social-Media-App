import React from 'react';
import { CREATE_POST_SUCCESS, CREATE_POST_FAIL } from '../Action/types';
const initialState = {
  post: {},
  message: '',
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_SUCCESS:
      return { ...state, post: action.payload };
    case CREATE_POST_FAIL:
      return { ...state, message: action.payload };
    default:
      return { state };
  }
};

export default postReducer;
